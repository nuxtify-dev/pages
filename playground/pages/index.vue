<script setup lang="ts">
// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()

// PAGE INFO
useSeoMeta({
  title: `${nuxtifyConfig.brand?.name} playground`,
  description: `This is the ${nuxtifyConfig.brand?.name} playground.`,
})
</script>

<template>
  <DemoCore class="py-8" />
</template>
