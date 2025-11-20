<template>
  <div ref="scope" :class="cn(props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type HTMLAttributes, onMounted, ref } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    filter?: boolean;
    duration?: number;
    delay?: number;
    class?: HTMLAttributes["class"];
    stagger?: number;
  }>(),
  { 
    duration: 0.7, 
    delay: 0, 
    filter: true, 
    stagger: 100 
  },
);

const scope = ref<HTMLElement | null>(null);

onMounted(() => {
  if (scope.value) {
    const children = Array.from(scope.value.children) as HTMLElement[];
    
    // Apply initial styles to all children
    children.forEach((child: HTMLElement) => {
      child.style.opacity = "0";
      child.style.filter = props.filter ? "blur(10px)" : "none";
      child.style.transition = `opacity ${props.duration}s ease-out, filter ${props.duration}s ease-out`;
    });

    // Animate children with stagger effect
    setTimeout(() => {
      children.forEach((child: HTMLElement, index: number) => {
        setTimeout(() => {
          child.style.opacity = "1";
          child.style.filter = props.filter ? "blur(0px)" : "none";
        }, index * props.stagger);
      });
    }, props.delay);
  }
});
</script>