<template>
  <div class="w-full max-w-5xl mx-auto">
    <!-- Progress Bar (Optional, but good for UX) -->
    <div class="w-full h-1 bg-gray-200 rounded-full mb-8 overflow-hidden" v-if="currentStep < 5">
      <div class="h-full bg-accent-red transition-all duration-500 ease-out"
        :style="{ width: `${(currentStep / 4) * 100}%` }"></div>
    </div>

    <div class="relative overflow-hidden min-h-[400px]">
      <Transition :name="transitionName" mode="out-in">

        <!-- Step 1: Introduction -->
        <div v-if="currentStep === 1" key="step1" class="flex flex-col items-center text-center space-y-8">
          <div class="space-y-4">
            <h1 class="text-6xl leading-[0.95] tracking-tighter text-text-main font-bold">
              Discover the ancient soul of
              <NuxtImg src="/assets/images/shymkent_logo.png" alt="Shymkent" loading="eager" decoding="async"
                fetchpriority="high" :placeholder="[50, 25, 75, 5]"
                class="inline-block h-[0.8em] w-auto -mt-4 mx-2 align-middle" />
              Shymkent & Turkestan Region.
            </h1>
            <p class="text-lg text-gray-600 max-w-xl mt-8 mx-auto">
              Let AI craft a personalized itinerary for Shymkent and Turkestan based on your unique preferences.
            </p>
          </div>

          <button @click="nextStep"
            class="px-8 py-4 bg-accent-red text-white rounded-full text-lg font-medium hover:bg-accent-hover transition-all duration-300 hover:bg-accent-hover">
            Let's Get Started
          </button>
        </div>

        <!-- Step 2: Season & Preferences -->
        <div v-else-if="currentStep === 2" key="step2" class="space-y-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl md:text-3xl font-display font-bold mb-2">When & What?</h3>
            <p class="text-gray-500">Choose your season and interests.</p>
          </div>

          <div class="space-y-6">
            <!-- Season Select (Custom) -->
            <div class="space-y-2 relative" ref="seasonDropdownRef">
              <label class="block text-sm font-medium text-gray-700 ml-1">Season</label>
              <div class="relative">
                <button @click="isSeasonOpen = !isSeasonOpen"
                  class="w-full bg-white border-2 border-gray-200 text-left py-4 px-6 rounded-2xl focus:outline-none focus:border-accent-red transition-colors flex justify-between items-center"
                  :class="{ 'border-accent-red': isSeasonOpen }">
                  <span :class="formData.season ? 'text-text-main' : 'text-gray-400'" class="text-lg">
                    {{ selectedSeasonLabel || 'Select a season' }}
                  </span>
                  <svg class="w-5 h-5 text-gray-500 transition-transform duration-200"
                    :class="{ 'rotate-180': isSeasonOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <Transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <div v-if="isSeasonOpen"
                    class="absolute z-50 w-full mt-2 bg-white border-2 border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                    <div class="max-h-60 overflow-auto py-2">
                      <button v-for="option in seasonOptions" :key="option.value" @click="selectSeason(option.value)"
                        class="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                        :class="{ 'bg-red-50 text-accent-red': formData.season === option.value }">
                        <span class="font-medium text-lg">{{ option.label }}</span>
                        <span v-if="formData.season === option.value" class="text-accent-red">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <!-- Preferences -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 ml-1">Interests</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button v-for="pref in preferencesOptions" :key="pref.id" @click="togglePreference(pref.id)"
                  class="p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col gap-2" :class="formData.preferences.includes(pref.id)
                    ? 'border-accent-red bg-red-50 text-accent-red'
                    : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'">
                  <span class="text-2xl">{{ pref.icon }}</span>
                  <span class="font-medium">{{ pref.label }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between pt-4">
            <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
            <button @click="nextStep" :disabled="!isStep2Valid"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Next Step
            </button>
          </div>
        </div>

        <!-- Step 3: Budget -->
        <div v-else-if="currentStep === 3" key="step3" class="space-y-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl md:text-3xl font-display font-bold mb-2">Your Budget?</h3>
            <p class="text-gray-500">Approximate daily budget per person.</p>
          </div>

          <div class="grid grid-cols-1 gap-4">
            <button v-for="option in budgetOptions" :key="option.id" @click="formData.budget = option.id"
              class="p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group"
              :class="formData.budget === option.id
                ? 'border-accent-red bg-red-50'
                : 'border-gray-100 bg-white hover:border-gray-200'">
              <div>
                <div class="font-bold text-lg"
                  :class="formData.budget === option.id ? 'text-accent-red' : 'text-text-main'">{{ option.label }}</div>
                <div class="text-sm text-gray-500">{{ option.desc }}</div>
              </div>
              <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="formData.budget === option.id ? 'border-accent-red' : 'border-gray-300'">
                <div v-if="formData.budget === option.id" class="w-3 h-3 rounded-full bg-accent-red"></div>
              </div>
            </button>
          </div>

          <div class="flex justify-between pt-4">
            <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
            <button @click="nextStep" :disabled="!formData.budget"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Next Step
            </button>
          </div>
        </div>

        <!-- Step 4: Travel Style -->
        <div v-else-if="currentStep === 4" key="step4" class="space-y-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl md:text-3xl font-display font-bold mb-2">Travel Style</h3>
            <p class="text-gray-500">How do you prefer to explore?</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button v-for="style in travelStyleOptions" :key="style.id" @click="formData.travelStyle = style.id"
              class="p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 text-center transition-all duration-200"
              :class="formData.travelStyle === style.id
                ? 'border-accent-red bg-red-50'
                : 'border-gray-100 bg-white hover:border-gray-200'">
              <span class="text-3xl">{{ style.icon }}</span>
              <span class="font-bold text-base"
                :class="formData.travelStyle === style.id ? 'text-accent-red' : 'text-text-main'">{{ style.label
                }}</span>
            </button>
          </div>

          <div class="flex justify-between pt-8">
            <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
            <button @click="finish" :disabled="!formData.travelStyle"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Generate Plan
            </button>
          </div>
        </div>

        <!-- Step 5: Loading -->
        <div v-else-if="currentStep === 5" key="step5"
          class="flex flex-col items-center justify-center py-20 space-y-8">
          <div class="loader-container">
            <svg viewBox="25 25 50 50" class="loader-svg">
              <circle r="20" cy="50" cx="50" class="loader-circle"></circle>
            </svg>
          </div>
          <h3 class="text-2xl font-display font-bold animate-pulse text-text-main">
            Crafting your journey...
          </h3>
          <p class="text-gray-500 text-center max-w-md">
            Our AI is designing a personalized experience just for you
          </p>
        </div>

        <!-- Step 6: Results -->
        <div v-else-if="currentStep === 6" key="step6" class="space-y-8">
          <!-- Header -->
          <div class="text-center mb-8 space-y-4">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-display font-bold text-text-main">Your Journey Awaits</h3>
            <p class="text-gray-500">Here's your personalized itinerary for Shymkent & Turkestan</p>
          </div>

          <!-- AI Response Content -->
          <div class="ai-response-container bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
            <div class="p-8 md:p-12 prose prose-lg max-w-none" v-html="renderedContent"></div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button @click="restartWizard"
              class="px-8 py-4 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Create Another Journey
            </button>
            <button @click="window.print()"
              class="px-8 py-4 bg-white text-text-main border-2 border-gray-200 rounded-full font-medium hover:border-accent-red hover:text-accent-red transition-all duration-300">
              Print Itinerary
            </button>
          </div>
        </div>

      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue'
import { marked } from 'marked'

const currentStep = ref(1)
const transitionName = ref('slide-next')
const seasonDropdownRef = ref<HTMLElement | null>(null)
const aiResponse = ref('')
const isStreaming = ref(false)

const formData = reactive({
  season: '',
  preferences: [] as string[],
  budget: '',
  travelStyle: ''
})

const isSeasonOpen = ref(false)

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true
})

const seasonOptions = [
  { value: 'spring', label: 'Spring (Blooming Tulips)' },
  { value: 'summer', label: 'Summer (Warm & Sunny)' },
  { value: 'autumn', label: 'Autumn (Golden Harvest)' },
  { value: 'winter', label: 'Winter (Cozy & Crisp)' }
]

const selectedSeasonLabel = computed(() => {
  const option = seasonOptions.find(opt => opt.value === formData.season)
  return option ? option.label : ''
})

const selectSeason = (value: string) => {
  formData.season = value
  isSeasonOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (seasonDropdownRef.value && !seasonDropdownRef.value.contains(event.target as Node)) {
    isSeasonOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const preferencesOptions = [
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'nature', label: 'Nature', icon: '🏔️' },
  { id: 'urban', label: 'Urban Exploring', icon: '🏙️' },
  { id: 'history', label: 'History', icon: '🏛️' },
  { id: 'food', label: 'Gastronomy', icon: '🍽️' },
  { id: 'culture', label: 'Culture', icon: '🎭' }
]

const budgetOptions = [
  { id: 'minimal', label: 'Minimal', desc: 'Backpacker style, hostels & street food' },
  { id: 'economy', label: '5,000 - 10,000 ₸', desc: 'Comfortable but budget-conscious' },
  { id: 'standard', label: '10,000 - 25,000 ₸', desc: 'Hotels and nice dinners' },
  { id: 'luxury', label: '25,000+ ₸', desc: 'Premium experiences and stays' }
]

const travelStyleOptions = [
  { id: 'solo', label: 'Solo', icon: '🎒' },
  { id: 'couple', label: 'Couple', icon: '💑' },
  { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' },
  { id: 'friends', label: 'Friends', icon: '👯‍♂️' }
]

const isStep2Valid = computed(() => formData.season && formData.preferences.length > 0)

const togglePreference = (id: string) => {
  const index = formData.preferences.indexOf(id)
  if (index === -1) {
    formData.preferences.push(id)
  } else {
    formData.preferences.splice(index, 1)
  }
}

const nextStep = () => {
  transitionName.value = 'slide-next'
  currentStep.value++
}

const prevStep = () => {
  transitionName.value = 'slide-prev'
  currentStep.value--
}

const finish = async () => {
  transitionName.value = 'slide-next'
  currentStep.value = 5
  isStreaming.value = true
  aiResponse.value = ''

  try {
    const response = await fetch('/api/generate-itinerary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error('Failed to generate itinerary')
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) {
      throw new Error('No response body')
    }

    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6)

          if (data === '[DONE]') {
            isStreaming.value = false
            // Smooth transition to results with fade
            setTimeout(() => {
              transitionName.value = 'fade'
              currentStep.value = 6
            }, 500)
            break
          }

          try {
            const parsed = JSON.parse(data)
            if (parsed.content) {
              aiResponse.value += parsed.content
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    }
  } catch (error) {
    console.error('Error generating itinerary:', error)
    aiResponse.value = '## Error\n\nWe encountered an issue generating your itinerary. Please try again.'
    isStreaming.value = false
    setTimeout(() => {
      transitionName.value = 'fade'
      currentStep.value = 6
    }, 500)
  }
}

const renderedContent = computed(() => {
  if (!aiResponse.value) return ''
  return marked(aiResponse.value)
})

const restartWizard = () => {
  currentStep.value = 1
  transitionName.value = 'fade'
  aiResponse.value = ''
  formData.season = ''
  formData.preferences = []
  formData.budget = ''
  formData.travelStyle = ''
}
</script>

<style scoped>
/* Slide Transitions */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease-out;
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loader Animation */
.loader-svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

.loader-circle {
  fill: none;
  stroke: #ff000a;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

/* AI Response Styling */
.ai-response-container {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Markdown Prose Styling */
.prose {
  color: #0B1724;
}

.prose :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #0B1724;
  line-height: 1.1;
}

.prose :deep(h2) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #ff000a;
  line-height: 1.2;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #fee;
}

.prose :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #0B1724;
  line-height: 1.3;
}

.prose :deep(h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0B1724;
}

.prose :deep(p) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #374151;
}

.prose :deep(strong) {
  font-weight: 600;
  color: #0B1724;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.75;
  color: #374151;
}

.prose :deep(ul>li) {
  list-style-type: disc;
}

.prose :deep(ol>li) {
  list-style-type: decimal;
}

.prose :deep(li>ul),
.prose :deep(li>ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose :deep(blockquote) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 4px solid #ff000a;
  font-style: italic;
  color: #6b7280;
  background: #fef2f2;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
}

.prose :deep(code) {
  background: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Courier New', monospace;
  color: #ff000a;
}

.prose :deep(pre) {
  background: #1f2937;
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.prose :deep(a) {
  color: #ff000a;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}

.prose :deep(a:hover) {
  color: #ed4321;
}

.prose :deep(hr) {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 0;
  border-top: 2px solid #e5e7eb;
}

.prose :deep(table) {
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
}

.prose :deep(th) {
  background: #fef2f2;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #ff000a;
}

.prose :deep(td) {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.prose :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Print Styles */
@media print {
  .ai-response-container {
    box-shadow: none;
    border: 1px solid #e5e7eb;
  }

  button {
    display: none;
  }
}
</style>
