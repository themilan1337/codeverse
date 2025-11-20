<template>
  <div 
    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border shadow-sm transition-colors"
    :class="colorClasses"
  >
    <div class="w-2 h-2 rounded-full animate-pulse" :class="dotColor"></div>
    <span class="text-sm font-bold">{{ score }}% Safety</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  score: number
}>()

const colorClasses = computed(() => {
  if (props.score >= 80) return 'bg-green-500/10 border-green-500/20 text-green-700'
  if (props.score >= 50) return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-700'
  return 'bg-red-500/10 border-red-500/20 text-red-700'
})

const dotColor = computed(() => {
  if (props.score >= 80) return 'bg-green-500'
  if (props.score >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
})
</script>
