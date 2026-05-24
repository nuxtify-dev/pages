<script setup lang="ts">
// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()

// PAGE INFO
useSeoMeta({
  title: `Features - ${nuxtifyConfig.brand?.name} playground`,
  description: `Showcase of features in ${nuxtifyConfig.brand?.name}.`,
})
</script>

<template>
  <DemoPages class="py-8" />
</template>
