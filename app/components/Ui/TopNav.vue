<template>
  <nav class="w-full py-6 px-6 md:px-12 flex items-center justify-between bg-transparent relative z-10">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span class="text-xl font-medium tracking-tight text-text-main">Kazakhstan</span>
      <span class="text-red-500 text-xl">❤️</span>
    </div>

    <!-- Center Info (Time) - Optional/Hidden on mobile -->
    <div class="hidden md:block text-sm text-gray-500 font-mono">
      5:12 PM // 6:12 PM
    </div>

    <!-- Right Actions -->
    <div class="flex items-center gap-8">
      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
        <NuxtLink to="#" class="hover:text-accent-blue transition-colors">Visa and entry</NuxtLink>
        <NuxtLink to="#" class="hover:text-accent-blue transition-colors">History</NuxtLink>
        <NuxtLink to="#" class="hover:text-accent-blue transition-colors">Attractions [236]</NuxtLink>
      </div>

      <!-- CTA Button -->
      <button class="bg-accent-blue hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow-md cursor-pointer">
        Choose a tour
      </button>

      <!-- Menu Button -->
      <button class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </nav>
</template>
