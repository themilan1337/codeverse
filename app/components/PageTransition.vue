<template>
  <ClientOnly>
    <div class="page-transition">
      <div class="page-transition-row row-1">
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
      </div>
      <div class="page-transition-row row-2">
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
        <div class="page-transition-block"></div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Initial page load reveal
onMounted(() => {
  if (process.client) {
    const { revealTransition } = usePageTransition()
    // Delay to ensure DOM is ready and this is the initial load
    setTimeout(() => {
      const blocks = document.querySelectorAll('.page-transition-block')
      if (blocks.length) {
        // Check if blocks are visible (initial load state)
        const firstBlock = blocks[0] as HTMLElement
        const isVisible = window.getComputedStyle(firstBlock).visibility !== 'hidden'

        if (isVisible) {
          revealTransition()
        }
      }
    }, 100)
  }
})
</script>

<style scoped>
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  pointer-events: none;
}

.page-transition-row {
  flex: 1;
  display: flex;
}

.page-transition-row.row-1 .page-transition-block {
  transform-origin: top;
}

.page-transition-row.row-2 .page-transition-block {
  transform-origin: bottom;
}

.page-transition-block {
  flex: 1;
  background-color: #ff000a;
  transform: scaleY(1);
  will-change: transform;
  visibility: visible;
}
</style>
