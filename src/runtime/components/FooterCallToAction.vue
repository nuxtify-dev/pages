<script setup lang="ts">
import { useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
</script>

<template>
  <v-row
    justify="center"
    class="text-center my-4"
  >
    <v-col
      cols="12"
      md="7"
      lg="6"
      xl="4"
    >
      <div
        v-if="nuxtifyConfig.footer?.cta?.title"
        :class="`text-h5 text-${nuxtifyConfig.footer.cta.color}-lighten-4`"
      >
        {{ nuxtifyConfig.footer.cta.title }}
      </div>
      <div
        v-if="nuxtifyConfig.footer?.cta?.subtitle"
        :class="`text-subtitle-1 text-${nuxtifyConfig.footer.cta.color}-lighten-3 mb-4`"
      >
        {{ nuxtifyConfig.footer.cta.subtitle }}
      </div>
      <EmailSubscribeForm
        :submit-url="nuxtifyConfig.email?.provider?.defaultSubmitUrl"
        dark
      />
    </v-col>
  </v-row>
</template>
