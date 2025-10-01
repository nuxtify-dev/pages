<script setup lang="ts">
import { useDisplay, useNuxtifyConfig, useNuxtifySiteTitle } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()
const { mdAndUp } = useDisplay()

// Page info
useNuxtifySiteTitle()
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

    <AppToast class="d-print-none" />

    <AppDialog class="d-print-none" />

    <v-footer class="bg-primary justify-center mt-8">
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<style>
.hover-link {
  text-decoration: none;
}
.hover-link:hover {
  text-decoration: underline;
}
</style>
