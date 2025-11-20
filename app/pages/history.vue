<template>
  <div class="min-h-screen bg-stone-50 pb-24">
    <UiTopNav />
    
    <!-- Hero Parallax-like -->
    <div class="relative h-[80vh] w-full overflow-hidden">
      <NuxtImg
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mausoleum_of_Khoja_Ahmed_Yasawi.jpg/1200px-Mausoleum_of_Khoja_Ahmed_Yasawi.jpg"
        alt="History of Shymkent"
        class="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-6xl md:text-9xl font-bold tracking-tighter mb-6">History</h1>
          <p class="text-xl md:text-3xl font-light max-w-2xl mx-auto">
            From the Great Silk Road to a Modern Metropolis
          </p>
        </div>
      </div>
    </div>

    <main class="max-w-[1200px] mx-auto px-6 md:px-12 -mt-20 relative z-10">
      
      <!-- Intro Card -->
      <div class="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl mb-24">
        <h2 class="text-3xl md:text-5xl font-bold mb-8 text-text-main">Ancient Origins</h2>
        <div class="prose prose-lg text-gray-600 max-w-none">
          <p>
            Shymkent is one of the oldest cities in Kazakhstan, with a history dating back to the 12th century. 
            Originally known as a caravanserai on the Great Silk Road to protect the trade route city of Sayram, 
            it grew into a significant center of culture and commerce.
          </p>
          <p class="mt-4">
            The name "Shymkent" comes from two Turkic words: "shym" meaning turf or grass, and "kent" meaning city. 
            Throughout centuries, it has witnessed the rise and fall of empires, serving as a strategic point between the nomadic steppe and the settled civilizations of the south.
          </p>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="space-y-24">
        <!-- Era 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <NuxtImg 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Turkestan_city_gates.jpg"
              class="rounded-[2rem] w-full h-[400px] object-cover shadow-lg"
              alt="Silk Road Era"
            />
          </div>
          <div class="order-1 md:order-2">
            <span class="text-accent-red font-mono text-lg mb-2 block">12th - 19th Century</span>
            <h3 class="text-4xl font-bold mb-6">The Silk Road Hub</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              As a vital stop on the Silk Road, Shymkent flourished. Merchants from China, Persia, and Europe exchanged goods, ideas, and cultures here. 
              The city became known for its bustling bazaars, skilled artisans, and as a gateway to the spiritual center of Turkistan.
            </p>
          </div>
        </div>

        <!-- Era 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-accent-red font-mono text-lg mb-2 block">20th Century</span>
            <h3 class="text-4xl font-bold mb-6">Industrial Growth</h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              In the 20th century, Shymkent transformed into a major industrial powerhouse. 
              Factories, railways, and modern infrastructure were built, shaping the city's urban landscape while preserving its warm, southern hospitality.
            </p>
          </div>
          <div>
            <NuxtImg 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Shymkent_plaza.jpg/1200px-Shymkent_plaza.jpg"
              class="rounded-[2rem] w-full h-[400px] object-cover shadow-lg"
              alt="Industrial Era"
            />
          </div>
        </div>

        <!-- Era 3 -->
        <div class="bg-black text-white rounded-[2.5rem] p-8 md:p-16 text-center">
          <span class="text-accent-red font-mono text-lg mb-4 block">Present Day</span>
          <h3 class="text-4xl md:text-6xl font-bold mb-8">A Modern Metropolis</h3>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Today, Shymkent is a vibrant city of over a million people. It blends its rich history with modern development, 
            offering a unique mix of ancient traditions and contemporary lifestyle. It is the gastronomic capital of Kazakhstan 
            and a city with a soul.
          </p>
          <NuxtLink to="/journey" class="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
            Experience it yourself
          </NuxtLink>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
// No special script needed
</script>
