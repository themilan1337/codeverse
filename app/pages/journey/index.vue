<template>
  <div class="min-h-screen pt-10 px-6 md:px-12 pb-24">
    <JourneyWizard />
  </div>
</template>

<script setup lang="ts">
import JourneyWizard from '~/components/Journey/Wizard.vue'

useSeoMeta({
  title: 'Plan Your Journey - Visit Shymkent',
  ogTitle: 'Plan Your Journey - Visit Shymkent',
  description: 'Plan your perfect trip to Shymkent and Turkestan with our AI-powered journey wizard.',
  ogDescription: 'Plan your perfect trip to Shymkent and Turkestan with our AI-powered journey wizard.',
  twitterCard: 'summary',
})
</script>
