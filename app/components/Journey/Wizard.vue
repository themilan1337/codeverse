<template>
  <div class="w-full max-w-3xl mx-auto">
    <!-- Progress Bar (Optional, but good for UX) -->
    <div class="w-full h-1 bg-gray-200 rounded-full mb-8 overflow-hidden" v-if="currentStep < 5">
      <div 
        class="h-full bg-accent-red transition-all duration-500 ease-out"
        :style="{ width: `${(currentStep / 4) * 100}%` }"
      ></div>
    </div>

    <div class="relative overflow-hidden min-h-[400px]">
      <Transition :name="transitionName" mode="out-in">
        
        <!-- Step 1: Introduction -->
        <div v-if="currentStep === 1" key="step1" class="flex flex-col items-center text-center space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-text-main">
              Plan Your Perfect Trip
            </h2>
            <p class="text-lg text-gray-600 max-w-xl mx-auto">
              Let AI craft a personalized itinerary for Shymkent and Turkestan based on your unique preferences.
            </p>
          </div>
          
          <button 
            @click="nextStep"
            class="px-8 py-4 bg-accent-red text-white rounded-full text-lg font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
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
            <!-- Season Select -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 ml-1">Season</label>
              <div class="relative">
                <select 
                  v-model="formData.season"
                  class="w-full appearance-none bg-white border-2 border-gray-200 text-text-main py-4 px-6 pr-12 rounded-2xl focus:outline-none focus:border-accent-red focus:ring-0 transition-colors cursor-pointer text-lg"
                >
                  <option value="" disabled>Select a season</option>
                  <option value="spring">Spring (Blooming Tulips)</option>
                  <option value="summer">Summer (Warm & Sunny)</option>
                  <option value="autumn">Autumn (Golden Harvest)</option>
                  <option value="winter">Winter (Cozy & Crisp)</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <!-- Preferences -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700 ml-1">Interests</label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  v-for="pref in preferencesOptions"
                  :key="pref.id"
                  @click="togglePreference(pref.id)"
                  class="p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col gap-2"
                  :class="formData.preferences.includes(pref.id) 
                    ? 'border-accent-red bg-red-50 text-accent-red' 
                    : 'border-gray-100 bg-white hover:border-gray-200 text-gray-600'"
                >
                  <span class="text-2xl">{{ pref.icon }}</span>
                  <span class="font-medium">{{ pref.label }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between pt-4">
             <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
             <button 
              @click="nextStep"
              :disabled="!isStep2Valid"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
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
            <button
              v-for="option in budgetOptions"
              :key="option.id"
              @click="formData.budget = option.id"
              class="p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between group"
              :class="formData.budget === option.id
                ? 'border-accent-red bg-red-50' 
                : 'border-gray-100 bg-white hover:border-gray-200'"
            >
              <div>
                <div class="font-bold text-lg" :class="formData.budget === option.id ? 'text-accent-red' : 'text-text-main'">{{ option.label }}</div>
                <div class="text-sm text-gray-500">{{ option.desc }}</div>
              </div>
              <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                :class="formData.budget === option.id ? 'border-accent-red' : 'border-gray-300'"
              >
                <div v-if="formData.budget === option.id" class="w-3 h-3 rounded-full bg-accent-red"></div>
              </div>
            </button>
          </div>

          <div class="flex justify-between pt-4">
             <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
             <button 
              @click="nextStep"
              :disabled="!formData.budget"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
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

          <div class="grid grid-cols-2 gap-4">
             <button
              v-for="style in travelStyleOptions"
              :key="style.id"
              @click="formData.travelStyle = style.id"
              class="aspect-square p-6 rounded-2xl border-2 flex flex-col items-center justify-center gap-4 text-center transition-all duration-200 hover:scale-[1.02]"
              :class="formData.travelStyle === style.id
                ? 'border-accent-red bg-red-50' 
                : 'border-gray-100 bg-white hover:border-gray-200'"
            >
              <span class="text-4xl">{{ style.icon }}</span>
              <span class="font-bold text-lg" :class="formData.travelStyle === style.id ? 'text-accent-red' : 'text-text-main'">{{ style.label }}</span>
            </button>
          </div>

          <div class="flex justify-between pt-8">
             <button @click="prevStep" class="text-gray-500 hover:text-text-main font-medium px-4">Back</button>
             <button 
              @click="finish"
              :disabled="!formData.travelStyle"
              class="px-8 py-3 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Plan
            </button>
          </div>
        </div>

        <!-- Step 5: Loading -->
        <div v-else-if="currentStep === 5" key="step5" class="flex flex-col items-center justify-center py-20 space-y-8">
          <div class="loader-container">
             <svg viewBox="25 25 50 50" class="loader-svg">
              <circle r="20" cy="50" cx="50" class="loader-circle"></circle>
            </svg>
          </div>
          <h3 class="text-2xl font-display font-bold animate-pulse text-text-main">
            Crafting your journey...
          </h3>
        </div>

      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

const currentStep = ref(1)
const transitionName = ref('slide-next')

const formData = reactive({
  season: '',
  preferences: [] as string[],
  budget: '',
  travelStyle: ''
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

const finish = () => {
  transitionName.value = 'slide-next'
  currentStep.value = 5
  // No further action as per requirements
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

/* Loader Animation */
.loader-svg {
 width: 3.25em;
 transform-origin: center;
 animation: rotate4 2s linear infinite;
}

.loader-circle {
 fill: none;
 stroke: #ff000a; /* Using the requested color directly */
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
</style>
