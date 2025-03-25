<script setup lang="ts">
import { useDisplay, useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
const { mdAndUp } = useDisplay()
</script>

<template>
  <v-app>
    <!-- Accessibility -->
    <NuxtRouteAnnouncer />

    <AppBar class="d-print-none" />

    <AppNavigationDrawer class="d-print-none" />

    <AppAnnouncementBar
      v-if="nuxtifyConfig.announcement?.show"
      class="d-print-none"
    />

    <v-main :min-height="mdAndUp ? 800 : 550">
      <slot />
    </v-main>

    <AppToast />

    <v-footer class="bg-primary justify-center mt-8">
      <AppFooter />
    </v-footer>
  </v-app>
</template>
