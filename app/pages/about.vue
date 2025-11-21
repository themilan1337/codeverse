<script setup lang="ts">
useSeoMeta({
  title: 'About Us - Visit Shymkent',
  ogTitle: 'About Us - Visit Shymkent',
  description: 'Learn about our mission to showcase the beauty and culture of Southern Kazakhstan.',
  ogDescription: 'Learn about our mission to showcase the beauty and culture of Southern Kazakhstan.',
  twitterCard: 'summary',
})
</script>

<template>
  <div class="min-h-screen pt-32 px-6 md:px-12">
    <h1 class="text-4xl md:text-6xl font-display font-bold mb-8">About Us</h1>
    <p class="text-xl text-gray-600 max-w-2xl mb-6">
      Discover the beauty and culture of Southern Kazakhstan through our innovative travel platform.
    </p>
    <p class="text-lg text-gray-500 max-w-3xl">
      We're dedicated to making your journey through Shymkent and Turkestan unforgettable with
      cutting-edge technology and local expertise.
    </p>

    <div class="mt-12">
      <NuxtLink to="/" class="text-accent-red hover:underline text-lg">
        ← Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
