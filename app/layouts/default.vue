<template>
  <div class="bg-stone-50 min-h-screen">
    <Menu ref="menuRef" />
    <UiTopNav :menu-ref="menuRef" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menu from "~/components/Ui/Menu.vue";

const menuRef = ref(null)
</script>
