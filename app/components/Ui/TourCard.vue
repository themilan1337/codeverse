<template>
  <NuxtLink :to="`/destination/${id}`" class="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 block">
    <!-- Image -->
    <NuxtImg 
      :src="image" 
      :alt="title" 
      loading="lazy"
      decoding="async"
      :placeholder="[50, 25, 75, 5]"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

    <!-- Content -->
    <div class="absolute bottom-0 left-0 p-6 w-full">
      <h3 class="text-white text-2xl font-bold leading-tight mb-3 drop-shadow-md">
        {{ title }}
      </h3>
      
      <div class="flex items-center gap-2 text-white/90 text-sm font-medium group-hover:text-accent-red transition-colors">
        <span>Discover now</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  id: string | number
  title: string
  image: string
}>()
</script>
