<template>
  <div class="fixed bottom-28 right-8 z-40">
    <!-- Chat Window -->
    <div 
      v-if="isOpen" 
      class="absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right"
      style="height: 500px;"
    >
      <!-- Header -->
      <div class="bg-gray-900 text-white p-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="font-medium">TravelMate AI</span>
        </div>
        <button @click="isOpen = false" class="text-gray-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" ref="messagesContainer">
        <div v-for="(msg, idx) in messages" :key="idx" class="flex flex-col gap-1" :class="msg.role === 'user' ? 'items-end' : 'items-start'">
          <div 
            class="max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed prose prose-sm prose-p:my-1 prose-ul:my-1 prose-li:my-0"
            :class="msg.role === 'user' ? 'bg-accent-red text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'"
            v-html="renderMessage(msg.content)"
          >
          </div>
        </div>
        <div v-if="isLoading && !isStreaming" class="flex items-start">
           <div class="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
             <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
             <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
             <span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
           </div>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 bg-white border-t border-gray-100">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <input 
            v-model="input" 
            type="text" 
            placeholder="Ask about Shymkent..." 
            class="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent-red outline-none"
          />
          <button 
            type="submit" 
            :disabled="!input.trim() || isLoading"
            class="bg-accent-red text-white p-2.5 rounded-xl hover:bg-accent-hover disabled:opacity-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Toggle Button -->
    <button 
      @click="isOpen = !isOpen"
      class="w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
    >
      <svg v-if="!isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  breaks: true,
  linkify: true
})

const isOpen = ref(false)
const input = ref('')
const isLoading = ref(false)
const isStreaming = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const messages = ref([
  { role: 'assistant', content: 'Hello! I am **TravelMate**. Ask me about *Shymkent* food, *Turkestan* history, or safety tips!' }
])

function renderMessage(content: string) {
  return md.render(content)
}

async function sendMessage() {
  if (!input.value.trim()) return

  const userMsg = input.value
  messages.value.push({ role: 'user', content: userMsg })
  input.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: userMsg })
    })

    if (!response.body) {
       messages.value.push({ role: 'assistant', content: 'Error: No response from server.' })
       isLoading.value = false
       return
    }

    // Check if it's JSON (fallback) or Stream
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
       const data = await response.json()
       messages.value.push({ role: 'assistant', content: data.reply || 'Error' })
       isLoading.value = false
       scrollToBottom()
       return
    }

    // Handle Stream
    isStreaming.value = true
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let assistantMsg = ''
    messages.value.push({ role: 'assistant', content: '' })
    const msgIndex = messages.value.length - 1

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      
      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const dataStr = line.slice(6)
          if (dataStr === '[DONE]') continue
          try {
            const data = JSON.parse(dataStr)
            const content = data.choices[0]?.delta?.content || ''
            assistantMsg += content
            messages.value[msgIndex].content = assistantMsg
            scrollToBottom()
          } catch (e) {
            // ignore parse errors for partial chunks
          }
        }
      }
    }

  } catch (e) {
    messages.value.push({ role: 'assistant', content: 'Error connecting to AI.' })
  } finally {
    isLoading.value = false
    isStreaming.value = false
    scrollToBottom()
  }
}

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}
</script>

<style>
/* Markdown Styles */
.prose p {
  margin-bottom: 0.5em;
}
.prose strong {
  font-weight: 600;
  color: inherit;
}
.prose ul {
  list-style-type: disc;
  padding-left: 1.2em;
}
.prose ol {
  list-style-type: decimal;
  padding-left: 1.2em;
}
</style>
