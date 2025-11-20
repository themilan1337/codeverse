<script setup lang="ts">
interface GuestbookEntry {
  id: string
  message: string
  signature: string
  author: string
  createdAt: string
  color: string
}

defineProps<{
  entry: GuestbookEntry
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<template>
  <div class="bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 break-inside-avoid mb-6">
    <!-- Message -->
    <div v-if="entry.message" class="text-gray-800 font-medium text-lg italic">
      "{{ entry.message }}"
    </div>

    <!-- Signature -->
    <div v-if="entry.signature" class="mt-auto">
      <img :src="entry.signature" alt="Signature" class="h-16 object-contain opacity-80 -ml-2" />
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center text-xs text-gray-400 mt-2 border-t border-gray-100 pt-3">
      <span class="font-semibold text-gray-500">{{ entry.author }}</span>
      <span>{{ formatDate(entry.createdAt) }}</span>
    </div>
  </div>
</template>
