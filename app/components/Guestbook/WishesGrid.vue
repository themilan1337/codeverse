<script setup lang="ts">
import WishCard from './WishCard.vue'

interface GuestbookEntry {
  id: string
  message: string
  signature: string
  author: string
  createdAt: string
  color: string
}

defineProps<{
  entries: GuestbookEntry[]
}>()
</script>

<template>
  <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
    <WishCard 
      v-for="entry in entries" 
      :key="entry.id" 
      :entry="entry" 
    />
  </div>
</template>
