<template>
  <div class="relative w-full h-full rounded-3xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
    <div ref="mapContainer" class="w-full h-full"></div>
    
    <!-- Overlay Controls -->
    <div class="absolute top-4 left-4 z-10">
      <slot name="overlay"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const props = defineProps<{
  center?: [number, number]
  zoom?: number
}>()

const mapContainer = ref<HTMLElement | null>(null)
const map = ref<mapboxgl.Map | null>(null)

// Mock token for demo purposes if env is missing
const token = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2x6Z...'; 

onMounted(() => {
  if (!mapContainer.value) return

  // Check if token is real or placeholder
  if (!token || token.includes('demo')) {
    console.warn('Mapbox token is missing or invalid. Map might not load correctly.')
  }

  mapboxgl.accessToken = token

  map.value = new mapboxgl.Map({
    container: mapContainer.value,
    style: 'mapbox://styles/mapbox/light-v11',
    center: props.center || [77.0, 43.0], // Default to Almaty region
    zoom: props.zoom || 5
  })

  map.value.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
})
</script>

<style>
/* Fix for mapbox canvas size */
.mapboxgl-canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
