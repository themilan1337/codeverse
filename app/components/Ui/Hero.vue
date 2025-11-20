<template>
  <section class="w-full px-6 md:px-12 pt-12 pb-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Left: Main Title -->
      <div class="lg:col-span-7">
        <h1 class="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-text-main font-bold">
          Discover the 
          <span class="relative inline-block">
            ancient soul
            <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent-red opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
            </svg>
          </span>
          of Shymkent 
          <img src="/assets/images/shymkent_logo.png" alt="Shymkent" class="inline-block h-[0.8em] w-auto -mt-4 mx-2 align-middle" />
          & Turkestan
        </h1>
      </div>

      <!-- Right: Image Card -->
      <div class="lg:col-span-5 h-full">
        <div class="relative w-full h-full min-h-[400px] rounded-[2.5rem] overflow-hidden group isolation-auto">
          <!-- Background Image -->
          <img 
            src="https://informburo.kz/storage/photos/72/main/iGSh3bFfQAuNU9dytwSSsnRRabvtXCLjCi7D2eGa.jpg" 
            alt="Shymkent & Turkestan" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <!-- Gradient Overlay (Bottom-up shadow) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 gap-6">
            <h2 class="text-2xl md:text-3xl text-white leading-tight font-bold drop-shadow-md">
              Experience the warmth of the South. From the spiritual domes of Turkestan to the vibrant streets of Shymkent.
            </h2>
            
            <div>
              <NuxtLink 
                to="/journey" 
                class="inline-flex items-center gap-2 text-white text-lg font-medium transition-all group/link hover:opacity-80"
              >
                Start the journey
                <svg 
                  class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
