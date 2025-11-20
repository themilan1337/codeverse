<template>
  <div class="bg-stone-50 min-h-screen">
    <UiMenu ref="menuRef" />
    <div class="w-full relative overflow-hidden pb-0">
      <UiTopNav :menu-ref="menuRef" />

      <main v-if="destination">
        <!-- Hero Section -->
        <section class="relative h-screen w-full overflow-hidden">
          <NuxtImg
            :src="destination.image"
            :alt="destination.title"
            class="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 pb-24 md:pb-32">
            <!-- <div>
              <span class="text-accent-red font-mono text-sm md:text-base tracking-wider uppercase mb-4 block">
                {{ destination.location }}
              </span>
            </div> -->
            
            <div>
              <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-6 leading-[0.9]">
                {{ destination.title }}
              </h1>
            </div>

            <div>
              <p class="text-xl md:text-3xl text-white/90 font-light max-w-3xl leading-relaxed">
                {{ destination.subtitle }}
              </p>
            </div>
          </div>
        </section>

        <!-- Content Section -->
        <section class="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <!-- Left Column: Description -->
            <div class="lg:col-span-7">
              <div class="text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-6">
                <p>{{ destination.description }}</p>
                <div class="flex flex-wrap gap-3 mt-8">
                  <span v-for="tag in destination.tags" :key="tag" class="px-4 py-2 bg-stone-200 text-stone-600 rounded-full text-sm font-medium">
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Column: Highlights -->
            <div class="lg:col-span-5">
              <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-stone-200/50">
                <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                  Highlights
                </h3>
                <ul class="space-y-6">
                  <li v-for="(highlight, index) in destination.highlights" :key="index" class="flex items-start gap-4 group">
                    <span class="text-accent-red font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">0{{ index + 1 }}</span>
                    <span class="text-lg text-gray-800 font-medium group-hover:translate-x-2 transition-transform duration-300">{{ highlight }}</span>
                  </li>
                </ul>
                
                <div class="mt-12 pt-8 border-t border-gray-100">
                  <NuxtLink to="/journey" class="w-full py-4 bg-black text-white rounded-full flex items-center justify-center gap-2 font-medium hover:bg-accent-red transition-colors duration-300 group">
                    Plan a trip ->
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Gallery Section (if more than 1 image) -->
        <section v-if="destination.images && destination.images.length > 1" class="py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
          <h2 class="text-3xl md:text-5xl font-bold mb-12">Gallery</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(img, idx) in destination.images" :key="idx" class="rounded-[2rem] overflow-hidden h-[400px] group">
              <NuxtImg 
                :src="img" 
                :alt="`${destination.title} gallery ${idx + 1}`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <!-- Next Destination Teaser (Optional, simple random or next in list) -->
        
      </main>

      <div v-else class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Destination Not Found</h1>
          <NuxtLink to="/" class="text-accent-red hover:underline">Go back home</NuxtLink>
        </div>
      </div>

      <UiLanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import destinationsData from '~/data/destinations.json'

const route = useRoute()
const menuRef = ref(null)

const destination = computed(() => {
  return destinationsData.find(d => d.id === route.params.id)
})

// Set page meta
if (destination.value) {
  useHead({
    title: `${destination.value.title} - Visit Shymkent`,
    meta: [
      { name: 'description', content: destination.value.description }
    ]
  })
}
</script>

<style scoped>
/* Custom scrollbar hide if needed */
</style>
