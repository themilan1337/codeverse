<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SignatureCanvas from '~/components/Guestbook/SignatureCanvas.vue'
import WishesGrid from '~/components/Guestbook/WishesGrid.vue'

useSeoMeta({
  title: 'Guestbook - Visit Shymkent',
  ogTitle: 'Guestbook - Visit Shymkent',
  description: 'Leave your mark on the history of Shymkent. Sign our digital guestbook and see wishes from travelers around the world.',
  ogDescription: 'Leave your mark on the history of Shymkent. Sign our digital guestbook and see wishes from travelers around the world.',
  ogImage: '/assets/images/history.jpg',
  twitterCard: 'summary_large_image',
})

const isModalOpen = ref(false)
const isLoading = ref(false)
const isSubmitting = ref(false)
interface GuestbookEntry {
  id: string
  message: string
  signature: string
  author: string
  createdAt: string
  color: string
}

const entries = ref<GuestbookEntry[]>([])

const form = ref({
  message: '',
  author: '',
  color: '#000000'
})

const canvasRef = ref<InstanceType<typeof SignatureCanvas> | null>(null)

const fetchEntries = async () => {
  isLoading.value = true
  try {
    const data = await $fetch<GuestbookEntry[]>('/api/guestbook')
    entries.value = data
  } catch (error) {
    console.error('Failed to fetch entries:', error)
  } finally {
    isLoading.value = false
  }
}

const submitEntry = async () => {
  if (!canvasRef.value) return
  
  const signature = canvasRef.value.getSignatureImage()
  if (!signature && !form.value.message) {
    alert('Please sign or write a message!')
    return
  }

  isSubmitting.value = true
  try {
    await $fetch('/api/guestbook', {
      method: 'POST',
      body: {
        message: form.value.message,
        signature: signature,
        author: form.value.author || 'Anonymous Traveler',
        color: form.value.color
      }
    })
    
    // Reset and close
    form.value.message = ''
    form.value.author = ''
    canvasRef.value.clearCanvas()
    isModalOpen.value = false
    
    // Refresh list
    await fetchEntries()
  } catch (error) {
    console.error('Failed to submit entry:', error)
    alert('Failed to save your wish. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchEntries()
})
</script>

<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    
    <!-- Hero Section -->
    <div class="relative h-[60vh] w-full overflow-hidden">
      <NuxtImg
        src="/assets/images/history.jpg"
        alt="Guestbook Background"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-5xl md:text-8xl font-bold tracking-tighter mb-6">Guestbook</h1>
          <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Leave your mark. Share your wish. Be part of our story.
          </p>
        </div>
      </div>
    </div>

    <main class="max-w-[1200px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <!-- Intro Card -->
      <div class="bg-[#fafafa]/90 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] mb-16 text-center shadow-xl border border-white/50">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-text-main">Wishes from around the world</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Travelers from every corner of the globe have visited Shymkent and Turkestan. 
          Here are their messages, sketches, and signatures. Add yours to the collection!
        </p>
        <button 
            @click="isModalOpen = true"
            class="mt-10 px-8 py-4 bg-accent-red rounded-full font-bold text-lg hover:bg-accent-hover transition text-white"
          >
            Sign the Guestbook
          </button>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-red"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="entries.length === 0" class="text-center py-20 text-gray-400">
        <p class="text-xl">No wishes yet. Be the first to sign!</p>
      </div>

      <!-- Grid -->
      <WishesGrid v-else :entries="entries" />

    </main>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="isModalOpen = false"></div>
      
      <div class="relative bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
        
        <!-- Header -->
        <div class="bg-stone-100 px-8 py-6 flex justify-between items-center border-b border-gray-200">
          <h3 class="text-2xl font-bold text-gray-800">Leave your mark</h3>
          <button @click="isModalOpen = false" class="text-gray-500 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          <!-- Signature Area -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Draw your signature or a doodle</label>
            <div class="h-64 w-full border-2 border-dashed border-gray-300 rounded-xl bg-stone-50 hover:bg-white transition-colors">
              <SignatureCanvas ref="canvasRef" />
            </div>
            <p class="text-xs text-gray-400 mt-2 text-right">Use your mouse or finger to draw</p>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Your Message (Optional)</label>
            <textarea 
              v-model="form.message"
              rows="3"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 outline-none transition-all resize-none bg-stone-50 focus:bg-white"
              placeholder="Share your thoughts about Shymkent..."
            ></textarea>
          </div>

          <!-- Author -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Your Name (Optional)</label>
            <input 
              v-model="form.author"
              type="text"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 outline-none transition-all bg-stone-50 focus:bg-white"
              placeholder="Anonymous Traveler"
            />
          </div>

        </div>

        <!-- Footer -->
        <div class="bg-stone-50 px-8 py-6 border-t border-gray-200 flex justify-end gap-4">
          <button 
            @click="isModalOpen = false"
            class="px-6 py-3 rounded-full font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="submitEntry"
            :disabled="isSubmitting"
            class="px-8 py-3 bg-accent-red text-white rounded-full font-bold hover:bg-accent-hover transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <span v-if="isSubmitting" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isSubmitting ? 'Signing...' : 'Sign Guestbook' }}
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* Custom scrollbar for modal if needed */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>
