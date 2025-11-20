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
      </main>

      <UiLanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import toursData from '../data/tours.json'
import Menu from "~/components/Ui/Menu.vue";

const menuRef = ref(null)
const tours = toursData
</script>