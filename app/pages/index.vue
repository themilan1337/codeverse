<template>
  <div>
    <Menu ref="menuRef" />

    <div class="min-h-screen w-full relative overflow-hidden pb-24">
      <UiTopNav :menu-ref="menuRef" />

      <main>
        <UiHero />

        <!-- Tour Cards Section -->
        <div class="px-6 md:px-12 py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UiTourCard
              v-for="tour in tours"
              :key="tour.id"
              :id="tour.id"
              :title="tour.title"
              :image="tour.image"
            />
          </div>
        </div>

        <!-- Map Section (Demo) -->
        <div class="px-6 md:px-12 py-12">
          <div class="w-full h-[500px] relative">
             <MapSimpleMap />

             <!-- Safety Badge Overlay -->
             <div class="absolute top-6 left-6 z-10">
               <SafetySafetyBadge :score="store.safetyScore" />
             </div>
          </div>
        </div>
      </main>

      <UiLanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import toursData from '../data/tours.json'
import Menu from "~/components/Ui/Menu.vue";
import { useMainStore } from '../store'

const menuRef = ref(null)
const tours = toursData
const store = useMainStore()
</script>