<template>
  <div class="fixed bottom-8 right-8 flex items-center gap-3 z-50">
    <button 
      v-for="lang in ['KZ', 'EN', 'RU']" 
      :key="lang"
      class="w-10 h-10 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-all cursor-pointer"
      :class="{ 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800': lang === 'EN' }"
    >
      {{ lang }}
    </button>
  </div>
</template>
