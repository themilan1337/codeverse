<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    <UiTopNav />

    <!-- Hero Section -->
    <div class="relative h-[60vh] w-full overflow-hidden">
      <NuxtImg
        src="/assets/images/shymkent_city.jpg"
        alt="Our Team"
        class="absolute inset-0 w-full h-full object-cover grayscale"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        :placeholder="[50, 25, 75, 5]"
      />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <span class="text-accent-red font-mono text-lg mb-4 block">ShymkentHub Hackathon</span>
          <h1 class="text-6xl md:text-9xl font-bold tracking-tighter mb-6">The Team</h1>
        </div>
      </div>
    </div>

    <main class="max-w-[1200px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <!-- Intro Card -->
      <div class="bg-[#fafafa] p-8 md:p-16 rounded-[2.5rem] mb-24 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 text-text-main">About the Project</h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          This project was developed specifically for the hackathon held at <span class="text-accent-red font-bold">ShymkentHub</span>. 
          Our goal was to create a digital gateway to Shymkent that not only informs but inspires. 
          Blending modern aesthetics with the rich history of the region.
        </p>
      </div>

      <!-- Team Members -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        
        <!-- Milan -->
        <div class="group bg-[#fafafa] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div class="relative z-10 flex flex-col items-center text-center">
            <div class="w-48 h-48 rounded-full overflow-hidden mb-8">
              <NuxtImg 
                src="/assets/images/milan.jpg"
                alt="Milan Gorislavets"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-3xl text-black font-bold mb-2">Milan Gorislavets</h3>
            <p class="text-gray-400 leading-relaxed">
              Architecting the core structure and bringing the vision to life with clean, efficient code. 
              Focused on performance and user experience.
            </p>
          </div>
        </div>

        <!-- Nariman -->
        <div class="group bg-[#fafafa] text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div class="relative z-10 flex flex-col items-center text-center">
            <div class="w-48 h-48 rounded-full overflow-hidden mb-8">
              <NuxtImg 
                src="/assets/images/yerkhan.jpg"
                alt="Nariman Yerkhan"
                class="w-full h-full object-cover -rotate-90"
              />
            </div>
            <h3 class="text-3xl text-black font-bold mb-2">Nariman Yerkhan</h3>
            <p class="text-gray-400 leading-relaxed">
              Responsible for strategic project development, including manifest creation, presentation design, and pitch formulation, driving the project's core vision.
            </p>
          </div>
        </div>

      </div>

      <!-- Technical Stack -->
      <div class="bg-[#111] text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span class="text-accent-red font-mono text-lg mb-4 block">Under the hood</span>
              <h2 class="text-4xl md:text-6xl font-bold">Technical Excellence</h2>
            </div>
            <div class="mt-6 md:mt-0">
              <p class="text-gray-400 max-w-md text-lg">
                Built with the latest web technologies to ensure speed, accessibility, and scalability.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Tech 1 -->
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-red/50 transition-colors">
              <h4 class="text-2xl font-bold mb-4 text-white">Nuxt 4</h4>
              <p class="text-gray-400">
                The powerful Vue framework for building modern web applications with server-side rendering and static site generation.
              </p>
            </div>

            <!-- Tech 2 -->
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-red/50 transition-colors">
              <h4 class="text-2xl font-bold mb-4 text-white">Tailwind CSS</h4>
              <p class="text-gray-400">
                A utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.
              </p>
            </div>

            <!-- Tech 3 -->
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-red/50 transition-colors">
              <h4 class="text-2xl font-bold mb-4 text-white">GSAP & OGL</h4>
              <p class="text-gray-400">
                Advanced animation libraries for creating smooth, high-performance animations and WebGL experiences.
              </p>
            </div>

             <!-- Tech 4 -->
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-red/50 transition-colors">
              <h4 class="text-2xl font-bold mb-4 text-white">OpenAI Integration</h4>
              <p class="text-gray-400">
                Powered by GPT models to provide intelligent, personalized travel recommendations for every user.
              </p>
            </div>
            
             <!-- Tech 5 -->
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-accent-red/50 transition-colors">
              <h4 class="text-2xl font-bold mb-4 text-white">Modern Architecture</h4>
              <p class="text-gray-400">
                Component-based architecture with strict typing using TypeScript for robust and maintainable code.
              </p>
            </div>

          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
// No special script needed
</script>
