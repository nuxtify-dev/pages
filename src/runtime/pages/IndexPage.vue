<script setup lang="ts">
import { useNuxtifyConfig, useServerSeoMeta } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()

// Page info
useServerSeoMeta({
  title: `${nuxtifyConfig.brand?.name}`,
  description: `This is the ${nuxtifyConfig.brand?.name} home page.`,
})
</script>

<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <ClientOnly>
          <h1>{{ nuxtifyConfig.brand?.name }} Home</h1>
          <template #fallback>
            <AppLoading />
          </template>
        </ClientOnly>
      </v-col>
    </v-row>
  </v-container>
</template>
