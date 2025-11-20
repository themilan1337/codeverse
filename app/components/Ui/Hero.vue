<template>
  <section class="w-full px-6 md:px-12 pt-12 pb-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      <!-- Left: Main Title -->
      <div class="lg:col-span-7">
        <h1 class="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-text-main">
          Discover the 
          <span class="relative inline-block">
            ancient soul
            <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent-blue opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </span>
          of Shymkent & Turkestan
        </h1>
      </div>

      <!-- Right: Description -->
      <div class="lg:col-span-5 lg:pt-4 flex flex-col gap-6">
        <div class="max-w-md ml-auto flex flex-col gap-8 items-start">
          <p class="text-lg text-gray-600 leading-relaxed">
            Experience the warmth of the South. From the spiritual domes of Turkestan to the vibrant streets of Shymkent. The heart of the Silk Road awaits you.
          </p>
          
          <NuxtLink 
            to="/journey" 
            class="bg-accent-blue hover:bg-accent-hover text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-3 group"
          >
            Start the Journey
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </NuxtLink>
        </div>
      </div>
      
    </div>
  </section>
</template>
