<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useServerSeoMeta, useNuxtifyConfig } from '#imports'

// Page info
useServerSeoMeta({
  title: 'nuxtify-pages',
  description: 'This is the nuxtify-pages homepage.',
})

// App state
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <v-container class="text-center">
    <ClientOnly>
      <h1>{{ nuxtifyConfig.brand.name }} Home</h1>
      <template #fallback>
        <AppLoading />
      </template>
    </ClientOnly>
  </v-container>
</template>
