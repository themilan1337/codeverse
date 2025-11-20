<template>
  <div class="fixed bottom-8 right-24 z-40">
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
            class="max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed"
            :class="msg.role === 'user' ? 'bg-accent-blue text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'"
          >
            {{ msg.content }}
          </div>
        </div>
        <div v-if="isLoading" class="flex items-start">
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
            class="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent-blue outline-none"
          />
          <button 
            type="submit" 
            :disabled="!input.trim() || isLoading"
            class="bg-accent-blue text-white p-2.5 rounded-xl hover:bg-accent-hover disabled:opacity-50 transition-colors"
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

const isOpen = ref(false)
const input = ref('')
const isLoading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

const messages = ref([
  { role: 'assistant', content: 'Hello! I am TravelMate. Ask me about Shymkent food, Turkestan history, or safety tips!' }
])

async function sendMessage() {
  if (!input.value.trim()) return

  const userMsg = input.value
  messages.value.push({ role: 'user', content: userMsg })
  input.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const { data } = await useFetch<{ reply: string }>('/api/openai', {
      method: 'POST',
      body: { prompt: userMsg }
    })
    
    if (data.value?.reply) {
      messages.value.push({ role: 'assistant', content: data.value.reply })
    } else {
      messages.value.push({ role: 'assistant', content: 'Sorry, I am in demo mode. (API Key missing)' })
    }
  } catch (e) {
    messages.value.push({ role: 'assistant', content: 'Error connecting to AI.' })
  } finally {
    isLoading.value = false
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
