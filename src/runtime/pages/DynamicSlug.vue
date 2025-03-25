<script setup lang="ts">
import { useRoute, capitalizeFirstLetter } from '#imports'

// Page info
const route = useRoute()
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        lg="8"
        xl="6"
      >
        <h1 class="text-h5 mt-4">
          {{ capitalizeFirstLetter(route.params.slug as string) }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>
