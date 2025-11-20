<template>
  <div class="min-h-screen bg-white pb-24">

    
    <main class="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <!-- Hero Section -->
      <div class="mb-20">
        <h1 class="text-5xl md:text-8xl font-bold text-text-main mb-8 tracking-tighter">
          Visa & <span class="text-accent-red">Entry</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
          Welcome to Shymkent. We've made your journey as smooth as possible. 
          Check the requirements below to ensure a hassle-free entry into Kazakhstan.
        </p>
      </div>

      <!-- Info Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <!-- Visa Free -->
        <div class="group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-black transition-colors duration-500">
          <div class="mb-8">
            <span class="inline-block p-4 rounded-full bg-white group-hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <h3 class="text-3xl font-bold mb-4 text-black group-hover:text-white transition-colors">Visa-Free Regime</h3>
          <p class="text-lg text-gray-600 group-hover:text-gray-300 transition-colors mb-6">
            Citizens of more than 70 countries can visit Kazakhstan without a visa for stays of up to 30 days. This includes EU countries, USA, Canada, UK, and many others.
          </p>
          <a href="https://www.gov.kz/memleket/entities/mfa/press/article/details/6764?lang=en" class="inline-flex items-center text-accent-red font-medium text-lg group-hover:text-white transition-colors">
            Check your country
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <!-- E-Visa -->
        <div class="group p-8 rounded-[2.5rem] bg-gray-50 hover:bg-black transition-colors duration-500">
          <div class="mb-8">
            <span class="inline-block p-4 rounded-full bg-white group-hover:bg-gray-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </div>
          <h3 class="text-3xl font-bold mb-4 text-black group-hover:text-white transition-colors">E-Visa</h3>
          <p class="text-lg text-gray-600 group-hover:text-gray-300 transition-colors mb-6">
            If you need a visa, you can easily apply for an electronic visa (e-Visa) through the official migration portal. The process is quick and fully online.
          </p>
          <a href="https://www.gov.kz/memleket/entities/mfa-kuala-lumpur/press/article/details/139561?lang=en" class="inline-flex items-center text-accent-red font-medium text-lg group-hover:text-white transition-colors">
            Apply Online
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>

      <!-- Important Info -->
      <div class="bg-black text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-3xl md:text-5xl font-bold mb-8">
            <NuxtImg 
            src="/assets/images/shymkent_logo.png" 
            alt="Shymkent" 
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :placeholder="[50, 25, 75, 5]"
            class="inline-block h-[0.8em] w-auto -mt-2 mr-2 align-middle" 
            />
            Important to know</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 class="text-xl font-bold mb-4 text-gray-300">Registration</h4>
              <p class="text-gray-400">Most visitors are registered automatically upon entry. However, if you plan to stay longer than 30 days, check with local migration police.</p>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-4 text-gray-300">Currency</h4>
              <p class="text-gray-400">The local currency is Tenge (KZT). Cards are widely accepted, but it's good to have some cash for small markets.</p>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-4 text-gray-300">Emergency</h4>
              <p class="text-gray-400">Dial 102 for Police, 103 for Ambulance. Tourist police are available in major city centers.</p>
            </div>
          </div>
        </div>
        
        <!-- Decorative Circle -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent-red opacity-20 rounded-full blur-3xl"></div>
      </div>

    </main>
  </div>
</template>

<script setup>
// No special script needed for now
</script>
