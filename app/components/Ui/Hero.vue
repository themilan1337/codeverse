<template>
  <section class="w-full px-4 md:px-12 pt-8 md:pt-12 pb-8">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Left: Main Title -->
      <div class="lg:col-span-7 flex flex-col items-start gap-8">
        <h1 class="text-4xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-text-main font-bold">
          Discover the 
          <span class="relative inline-block">
            ancient soul
            <svg class="absolute w-full h-4 -bottom-3 md:h-6 md:-bottom-5 left-0 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1418 125">
              <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z" fill="rgb(255, 0, 10)"></path>
            </svg>
          </span>
          of Shymkent 
          <NuxtImg 
            src="/assets/images/shymkent_logo.png" 
            alt="Shymkent" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :placeholder="[50, 25, 75, 5]"
            class="inline-block h-[0.8em] w-auto -mt-4 mx-2 align-middle" 
          />
          & Turkestan
        </h1>

        <div class="flex flex-wrap items-center gap-4 md:gap-6">
          <button class="px-6 py-3 md:px-8 md:py-4 bg-accent-red text-white rounded-full text-base md:text-lg font-medium hover:bg-accent-hover transition-colors duration-300 flex items-center gap-2 group">
            Start the journey
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <button class="text-base md:text-lg font-medium text-black hover:text-gray-600 transition-colors">
            About region
          </button>
        </div>
      </div>
        

      <!-- Right: Image Card -->
      <div class="lg:col-span-5 h-full">
        <div class="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group isolation-auto">
          <!-- Background Image -->
          <NuxtImg 
            src="https://informburo.kz/storage/photos/72/main/iGSh3bFfQAuNU9dytwSSsnRRabvtXCLjCi7D2eGa.jpg" 
            alt="Shymkent & Turkestan" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :placeholder="[50, 25, 75, 5]"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <!-- Gradient Overlay (Bottom-up shadow) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 gap-6">
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
