<template>
  <div class="min-h-screen pt-32 px-6 md:px-12 pb-24 bg-stone-50">
    <div class="w-full max-w-5xl mx-auto">
      <div v-if="pending" class="flex justify-center items-center min-h-[400px]">
        <div class="loader-container">
          <svg viewBox="25 25 50 50" class="loader-svg">
            <circle r="20" cy="50" cx="50" class="loader-circle"></circle>
          </svg>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <h1 class="text-3xl font-bold text-text-main mb-4">Itinerary Not Found</h1>
        <p class="text-gray-600 mb-8">The itinerary you are looking for does not exist or has been removed.</p>
        <NuxtLink to="/journey" class="px-8 py-4 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-all">
          Create New Journey
        </NuxtLink>
      </div>

      <div v-else class="space-y-8">
        <!-- Header -->
        <div class="text-center mb-8 space-y-4">
          <div class="inline-flex items-center justify-center w-16 h-16 mb-4">
            <img src="/assets/images/shymkent_logo.png" alt="">
          </div>
          <h1 class="text-4xl font-display font-bold text-text-main">Shared Journey</h1>
          <p class="text-gray-500">A personalized itinerary for Shymkent & Turkestan Region</p>
          
          <!-- Tags -->
          <div class="flex flex-wrap justify-center gap-2 mt-4">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 capitalize">
              {{ itinerary.season }}
            </span>
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 capitalize">
              {{ itinerary.budget }} Budget
            </span>
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 capitalize">
              {{ itinerary.travelStyle }} Style
            </span>
          </div>
        </div>

        <!-- Content -->
        <div class="ai-response-container bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
          <div class="p-8 md:p-12 prose prose-lg max-w-none" v-html="renderedContent"></div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 no-print">
          <NuxtLink to="/journey"
            class="px-8 py-4 bg-accent-red text-white rounded-full font-medium hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
            Create Your Own
          </NuxtLink>
          <button @click="printItinerary"
            class="px-8 py-4 bg-white text-text-main border-2 border-gray-200 rounded-full font-medium hover:border-accent-red hover:text-accent-red transition-all duration-300">
            Print Itinerary
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const route = useRoute()
const id = route.params.id

const { data: itinerary, pending, error } = await useFetch(`/api/itinerary/${id}`)

// Configure marked
marked.setOptions({
  breaks: true,
  gfm: true
})

const renderedContent = computed(() => {
  if (!itinerary.value?.content) return ''
  return marked(itinerary.value.content)
})

const printItinerary = () => {
  window.print()
}

const itin = itinerary.value as any
if (itin) {
  useSeoMeta({
    title: () => `My Shymkent Journey - ${itin.season}`,
    ogTitle: () => `My Shymkent Journey - ${itin.season}`,
    description: () => `Check out my personalized ${itin.travelStyle} itinerary for Shymkent and Turkestan.`,
    ogDescription: () => `Check out my personalized ${itin.travelStyle} itinerary for Shymkent and Turkestan.`,
    twitterCard: 'summary',
    robots: 'noindex'
  })
}
</script>

<style scoped>
/* Loader Animation */
.loader-svg {
  width: 3.25em;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
}

.loader-circle {
  fill: none;
  stroke: #ff000a;
  stroke-width: 2;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash4 1.5s ease-in-out infinite;
}

@keyframes rotate4 {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash4 {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -125px;
  }
}

/* Markdown Prose Styling (Copied from Wizard.vue for consistency) */
.prose {
  color: #0B1724;
}

.prose :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #0B1724;
  line-height: 1.1;
}

.prose :deep(h2) {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #ff000a;
  line-height: 1.2;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #fee;
}

.prose :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #0B1724;
  line-height: 1.3;
}

.prose :deep(h4) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0B1724;
}

.prose :deep(p) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #374151;
}

.prose :deep(strong) {
  font-weight: 600;
  color: #0B1724;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.prose :deep(li) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.75;
  color: #374151;
}

.prose :deep(ul>li) {
  list-style-type: disc;
}

.prose :deep(ol>li) {
  list-style-type: decimal;
}

.prose :deep(li>ul),
.prose :deep(li>ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose :deep(blockquote) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  border-left: 4px solid #ff000a;
  font-style: italic;
  color: #6b7280;
  background: #fef2f2;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
}

.prose :deep(code) {
  background: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Courier New', monospace;
  color: #ff000a;
}

.prose :deep(pre) {
  background: #1f2937;
  color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.prose :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.prose :deep(a) {
  color: #ff000a;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}

.prose :deep(a:hover) {
  color: #ed4321;
}

.prose :deep(hr) {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 0;
  border-top: 2px solid #e5e7eb;
}

.prose :deep(table) {
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-collapse: collapse;
}

.prose :deep(th) {
  background: #fef2f2;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid #ff000a;
}

.prose :deep(td) {
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.prose :deep(img) {
  max-width: 50%;
  height: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: block;
}

@media print {
  .no-print {
    display: none !important;
  }
  
  .ai-response-container {
    box-shadow: none;
    border: none;
  }

  /* Ensure content is visible */
  body * {
    visibility: hidden;
  }
  
  .ai-response-container, .ai-response-container * {
    visibility: visible;
  }
  
  .ai-response-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
