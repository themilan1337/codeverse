<template>
  <div class="min-h-screen pt-32 px-6 md:px-12">
    <h1 class="text-4xl md:text-6xl font-display font-bold mb-8">Our Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-2xl font-bold mb-3">Guided Tours</h3>
        <p class="text-gray-600">Expert-led tours through historical landmarks and cultural sites.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-2xl font-bold mb-3">Custom Itineraries</h3>
        <p class="text-gray-600">Personalized travel plans tailored to your interests.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-2xl font-bold mb-3">Safety Monitoring</h3>
        <p class="text-gray-600">Real-time safety scores and alerts for your journey.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl shadow-md">
        <h3 class="text-2xl font-bold mb-3">Local Experiences</h3>
        <p class="text-gray-600">Authentic cultural experiences with local communities.</p>
      </div>
    </div>

    <div class="mt-12">
      <NuxtLink to="/" class="text-accent-red hover:underline text-lg">
        ← Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
