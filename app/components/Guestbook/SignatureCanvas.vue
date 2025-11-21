<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  width?: number
  height?: number
  color?: string
}>()

const emit = defineEmits(['save', 'clear'])

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isDrawing = ref(false)
const ctx = ref<CanvasRenderingContext2D | null>(null)

// Initialize canvas
onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  // Set actual size in memory (scaled to account for high DPI displays)
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  
  canvas.width = (props.width || rect.width) * dpr
  canvas.height = (props.height || rect.height) * dpr
  
  ctx.value = canvas.getContext('2d')
  if (ctx.value) {
    ctx.value.scale(dpr, dpr)
    ctx.value.lineCap = 'round'
    ctx.value.lineJoin = 'round'
    ctx.value.lineWidth = 3
    ctx.value.strokeStyle = props.color || '#000000'
  }
  
  // Handle window resize if needed (optional for now)
})

const startDrawing = (e: MouseEvent | TouchEvent) => {
  isDrawing.value = true
  draw(e)
}

const stopDrawing = () => {
  isDrawing.value = false
  if (ctx.value) {
    ctx.value.beginPath() // Reset path
  }
}

const draw = (e: MouseEvent | TouchEvent) => {
  if (!isDrawing.value || !ctx.value || !canvasRef.value) return

  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  
  let clientX, clientY
  
  if (e instanceof MouseEvent) {
    clientX = e.clientX
    clientY = e.clientY
  } else {
    const touch = e.touches[0]
    if (touch) {
      clientX = touch.clientX
      clientY = touch.clientY
    } else {
      return
    }
  }

  const x = clientX - rect.left
  const y = clientY - rect.top

  ctx.value.lineTo(x, y)
  ctx.value.stroke()
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
}

const clearCanvas = () => {
  if (!ctx.value || !canvasRef.value) return
  ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  emit('clear')
}

const getSignatureImage = () => {
  if (!canvasRef.value) return null
  return canvasRef.value.toDataURL('image/png')
}

defineExpose({
  getSignatureImage,
  clearCanvas
})
</script>

<template>
  <div class="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-inner border border-gray-200 touch-none">
    <canvas
      ref="canvasRef"
      class="w-full h-full cursor-crosshair"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
      @touchstart.prevent="startDrawing"
      @touchmove.prevent="draw"
      @touchend.prevent="stopDrawing"
    ></canvas>
    
    <button 
      @click="clearCanvas"
      class="absolute top-2 right-2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
      title="Clear"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
    </button>
  </div>
</template>
