<template>
  <div class="min-h-screen w-full relative overflow-hidden">
    <UiTopNav />
    
    <main>
      <UiHero />
      
      <!-- Placeholder for Cards (Step 2) -->
      <div class="px-6 md:px-12 py-8">
        <div class="w-full h-96 border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center text-gray-400">
          Cards Section (Coming in Step 2)
        </div>
      </div>
    </main>

    <UiLanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt
</script>