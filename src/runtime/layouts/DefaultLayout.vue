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

    <AppHeader class="d-print-none" />

    <AppNavigationDrawer class="d-print-none" />

    <AppAnnouncement
      v-if="nuxtifyConfig.announcement?.show"
      class="d-print-none"
    />

    <v-main :min-height="mdAndUp ? 800 : 550">
      <slot />
    </v-main>

    <AppToast class="d-print-none" />

    <AppDialog class="d-print-none" />

    <AppFooter />
  </v-app>
</template>

<style>
.link-hover {
  text-decoration: none;
}
.link-hover:hover {
  text-decoration: underline;
}
</style>
