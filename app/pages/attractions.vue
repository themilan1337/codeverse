<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    <UiTopNav />

    <!-- Hero Section -->
    <div class="relative h-[70vh] w-full overflow-hidden">
      <NuxtImg
        src="https://upload.wikimedia.org/wikipedia/commons/1/15/Karla_Marksa%2C_Kazakhstan_-_panoramio.jpg"
        alt="Attractions of Shymkent & Turkestan"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        :placeholder="[50, 25, 75, 5]"
      />
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-9xl font-bold tracking-tighter mb-6">Attractions</h1>
          <p class="text-xl md:text-3xl font-light max-w-2xl mx-auto">
            Discover the hidden gems of the Great Steppe
          </p>
        </div>
      </div>
    </div>

    <main class="max-w-[1400px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <!-- Intro Card -->
      <div class="bg-[#fafafa] p-8 md:p-12 rounded-[2.5rem] mb-20 text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-main">Must-Visit Places</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          From ancient mausoleums echoing with history to vibrant modern parks and breathtaking natural landscapes. 
          Shymkent and the Turkestan region offer a diverse tapestry of experiences for every traveler.
        </p>
      </div>

      <!-- Attractions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        
        <!-- Card 1: Mausoleum -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
          <NuxtImg 
            src="/assets/images/turkestan.webp"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span class="text-accent-red font-medium mb-2 block">Turkestan</span>
            <h3 class="text-3xl font-bold text-white mb-4">Khoja Ahmed Yasawi</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              A UNESCO World Heritage site and a masterpiece of medieval architecture.
            </p>
          </div>
        </div>

        <!-- Card 2: Akmeshit Cave -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
          <NuxtImg 
            src="/assets/images/cave.jpg"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span class="text-accent-red font-medium mb-2 block">Nature</span>
            <h3 class="text-3xl font-bold text-white mb-4">Akmeshit Cave</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              A mysterious underground mosque with its own microclimate and trees growing inside.
            </p>
          </div>
        </div>

        <!-- Card 3: Dendropark -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
          <NuxtImg 
            src="/assets/images/dendro.jpg"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span class="text-accent-red font-medium mb-2 block">Shymkent</span>
            <h3 class="text-3xl font-bold text-white mb-4">Dendropark</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              A massive arboretum perfect for walks, cycling, and enjoying nature in the city.
            </p>
          </div>
        </div>

         <!-- Card 4: Citadel -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
          <NuxtImg 
            src="/assets/images/citadel.jpg"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <span class="text-accent-red font-medium mb-2 block">History</span>
            <h3 class="text-3xl font-bold text-white mb-4">Ancient Citadel</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              The heart of the ancient city, recently restored to showcase layers of history.
            </p>
          </div>
        </div>
        
         <!-- Card 5: Sayram -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
           <NuxtImg 
            src="/assets/images/sayram.jpg"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <span class="text-accent-red font-medium mb-2 block">Culture</span>
            <h3 class="text-3xl font-bold text-white mb-4">Sayram</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              One of the oldest settlements, filled with sacred mausoleums and traditional life.
            </p>
          </div>
        </div>

         <!-- Card 6: Otrar -->
        <div class="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer">
           <NuxtImg 
            src="/assets/images/otrar.jpeg"
             class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             loading="lazy"
             :placeholder="[50, 25, 75, 5]"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <span class="text-accent-red font-medium mb-2 block">Archaeology</span>
            <h3 class="text-3xl font-bold text-white mb-4">Otrar</h3>
            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              The ruins of the legendary city that was besieged by Genghis Khan.
            </p>
          </div>
        </div>

      </div>

      <!-- CTA Section -->
      <div class="bg-black text-white rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-4xl md:text-6xl font-bold mb-8">Ready to explore?</h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let our AI guide help you plan the perfect itinerary based on your interests and time.
          </p>
          <NuxtLink to="/journey" class="inline-block px-10 py-5 bg-accent-red text-white rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-600/30">
            Plan my trip
          </NuxtLink>
        </div>
         <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-red opacity-20 rounded-full blur-3xl"></div>
         <div class="absolute -top-32 -right-32 w-96 h-96 bg-accent-red opacity-20 rounded-full blur-3xl"></div>
      </div>

    </main>
  </div>
</template>

<script setup>
// No special script needed
</script>
