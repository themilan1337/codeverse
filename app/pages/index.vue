<template>
  <div class="bg-stone-50 min-h-screen">


    <div class="w-full relative overflow-hidden pb-0">


      <main>
        <UiHero />

        <!-- Intro Section -->
        <section class="py-20 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div class="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <div class="md:w-1/3">
              <!-- <span class="text-accent-red font-mono text-sm md:text-base tracking-wider uppercase mb-4 block">Welcome to the South</span> -->
              <h2 class="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-text-main">
                Where History <br />
                Meets <span class="text-gray-400 italic">Hospitality</span>
              </h2>
            </div>
            <div class="md:w-2/3">
              <p class="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Shymkent is not just a city; it's an experience. From the bustling bazaars filled with the aroma of spices to the ancient mausoleums that whisper stories of the Silk Road. Discover a region where every corner holds a new adventure and every meal is a celebration.
              </p>
              
              <div class="mt-12 flex gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span class="block text-3xl md:text-4xl font-bold text-black">2200+</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wide">Years of History</span>
                </div>
                <div>
                  <span class="block text-3xl md:text-4xl font-bold text-black">300+</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wide">Sunny Days</span>
                </div>
                <div>
                  <span class="block text-3xl md:text-4xl font-bold text-black">∞</span>
                  <span class="text-sm text-gray-500 uppercase tracking-wide">Memories</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Bento Grid -->
        <section class="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div class="mb-16 text-center">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">Why Visit
              <NuxtImg 
            src="/assets/images/shymkent_logo.png" 
            alt="Shymkent" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :placeholder="[50, 25, 75, 5]"
            class="inline-block h-[0.8em] w-auto -mt-2 mx-2 align-middle" 
          />
              Shymkent?</h2>
            <p class="text-gray-600 max-w-2xl mx-auto text-lg">Discover the unique blend of ancient traditions and modern life that makes this region the heart of Kazakhstan.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            <!-- Card 1: Large Left -->
            <div class="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group h-[400px] md:h-full">
              <NuxtImg 
                src="/assets/images/shymkent_city.jpg" 
                alt="City Life"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-8 md:p-12">
                <h3 class="text-3xl md:text-4xl text-white font-bold mb-2">Vibrant City Life</h3>
                <p class="text-white/80 text-lg max-w-md">Experience the energy of a modern metropolis with a warm southern soul.</p>
              </div>
            </div>

            <!-- Right Column -->
            <div class="flex flex-col gap-6 h-full">
              <!-- Card 2: Top Right -->
              <div class="relative flex-1 rounded-[2.5rem] overflow-hidden group min-h-[250px]">
                <NuxtImg 
                  src="/assets/images/cave.jpg" 
                  alt="Nature"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div class="absolute bottom-0 left-0 p-8">
                  <h3 class="text-2xl text-white font-bold">Unspoiled Nature</h3>
                </div>
              </div>

              <!-- Card 3: Bottom Right -->
              <div class="relative flex-1 rounded-[2.5rem] overflow-hidden group min-h-[250px] bg-[#F5F5F0] flex items-center justify-center p-8 text-center hover:bg-[#EAEAE5] transition-colors">
                <div>
                  <div class="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl text-black font-bold mb-2">Gastronomy</h3>
                  <p class="text-gray-600">Taste the best cuisine in Central Asia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tour Cards Section -->
        <section class="px-6 md:px-12 py-12 bg-white rounded-t-[3rem]">
          <div class="max-w-[1400px] mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <span class="text-accent-red font-mono text-sm tracking-wider uppercase mb-2 block">Discover</span>
                <h2 class="text-4xl md:text-5xl font-bold text-text-main">Popular
                  <NuxtImg 
            src="/assets/images/shymkent_logo.png" 
            alt="Shymkent" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :placeholder="[50, 25, 75, 5]"
            class="inline-block h-[0.8em] w-auto -mt-2 mx-2 align-middle" 
          />
                  Destinations</h2>
              </div>
              <NuxtLink to="/attractions" class="group flex items-center gap-2 text-lg font-medium hover:text-accent-red transition-colors">
                View all places
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <UiTourCard
                v-for="tour in tours"
                :key="tour.id"
                :id="tour.id"
                :title="tour.title"
                :image="tour.image"
                class="h-[500px]"
              />
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-24 px-6 md:px-12 bg-black text-white text-center relative overflow-hidden">
          <div class="absolute inset-0 opacity-30">
            <NuxtImg src="/assets/images/mountains.jpg" class="w-full h-full object-cover grayscale" />
          </div>
          <div class="relative z-10 max-w-4xl mx-auto">
            <h2 class="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Ready to start your journey?</h2>
            <p class="text-xl md:text-2xl text-gray-300 mb-12 font-light">
              Let AI help you plan the perfect trip to Shymkent and Turkestan based on your preferences.
            </p>
            <NuxtLink to="/journey" class="inline-flex items-center gap-3 px-10 py-5 bg-accent-red text-white rounded-full transition text-xl font-bold hover:bg-accent-hover transition-all">
              Plan my trip
            </NuxtLink>
          </div>
        </section>
      </main>

      <UiLanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import destinationsData from '~/data/destinations.json'



const tours = destinationsData.slice(0, 3).map(d => ({
  ...d,
  title: `${d.title}: ${d.subtitle}`
}))
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>