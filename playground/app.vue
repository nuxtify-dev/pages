<script setup lang="ts">
const nuxtifyConfig = useAppConfig().nuxtify
</script>

<template>
  <div>
    nuxtify-pages module playground!
    <v-btn>
      Test
    </v-btn>
  </div>

  <h2>nuxtifyConfig</h2>
  <pre>
    {{ nuxtifyConfig }}
  </pre>
</template>
