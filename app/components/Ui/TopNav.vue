<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const localTime = ref('')
const shymkentTime = ref('')
let timer: ReturnType<typeof setInterval>

// Accept menuRef as prop
const props = defineProps<{
  menuRef: any
}>()

function updateTime() {
  const now = new Date()
  
  // Local Time
  localTime.value = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  })

  // Shymkent Time (UTC+5)
  shymkentTime.value = now.toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Almaty',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  })
}

function handleMenuToggle() {
  if (props.menuRef && props.menuRef.toggleMenu) {
    props.menuRef.toggleMenu()
  }
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <nav class="w-full py-4 px-4 md:py-6 md:px-12 flex items-center justify-between bg-transparent relative z-10">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <NuxtLink to="/">
        <NuxtImg 
          class="w-12 md:w-16 h-auto" 
          src="https://upload.wikimedia.org/wikipedia/commons/6/66/Shymkent_logo.svg" 
          alt=""
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </NuxtLink>
    </div>

    <!-- Center Info (Time) - Optional/Hidden on mobile -->
    <div class="hidden md:block text-sm text-gray-500 font-mono min-w-[280px] text-center">
      LOCAL {{ localTime }} // CIT {{ shymkentTime }}
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-2 md:gap-8">
      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
        <NuxtLink to="/visa" class="hover:text-accent-red transition-colors">Visa and entry</NuxtLink>
        <NuxtLink to="/history" class="hover:text-accent-red transition-colors">History</NuxtLink>
        <NuxtLink to="/attractions" class="hover:text-accent-red transition-colors">Attractions</NuxtLink>
        <NuxtLink to="/team" class="hover:text-accent-red transition-colors">Team</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-accent-red transition-colors">Contact</NuxtLink>
      </div>

      <!-- CTA Button -->
      <NuxtLink to="/journey" class="bg-accent-red hover:bg-accent-hover text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors cursor-pointer">
        Start the journey
      </NuxtLink>

      <!-- Menu Button -->
      <button 
        @click="handleMenuToggle"
        class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </nav>
</template>
