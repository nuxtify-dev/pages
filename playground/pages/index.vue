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
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>{{ nuxtifyConfig.brand?.name }} playground</h1>
        </v-col>
      </v-row>

      <!-- Nuxtify config -->
      <v-row>
        <v-col cols="12">
          <v-card class="pa-4">
            <h2>nuxtifyConfig</h2>
            <pre>{{ nuxtifyConfig }}</pre>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <DemoCore />
  </div>
</template>
