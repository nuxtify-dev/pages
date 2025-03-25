<script setup lang="ts">
import { useDisplay, useDrawer, useNuxtifyConfig, mdiArrowTopRight } from '#imports'

// App state
const { smAndDown } = useDisplay()
const nuxtifyConfig = useNuxtifyConfig()
const drawer = useDrawer()

// Navigation
const primaryNavLinks = nuxtifyConfig.navigation?.primary
const secondaryNavLinks = nuxtifyConfig.navigation?.secondary
const featuredSecondaryLink = secondaryNavLinks?.slice(0, 1)[0] // first link gets featured
</script>

<template>
  <v-navigation-drawer
    v-if="smAndDown"
    v-model="drawer"
    location="right"
  >
    <nav>
      <v-list nav>
        <!-- Primary links -->
        <v-list-item
          v-for="(link, i) in primaryNavLinks"
          :key="i"
          :to="link.to"
          :href="link.href"
          :prepend-icon="link.icon"
          color="primary"
          :target="link.openInNew ? '_blank' : undefined"
          :rel="link.openInNew ? 'noopener nofollow' : undefined"
          slim
          exact
        >
          <v-list-item-title class="text-subtitle-1 font-weight-bold py-1">
            {{ link.text }}
            <v-icon
              v-if="link.openInNew"
              :icon="mdiArrowTopRight"
              size="x-small"
              color="grey"
              class="ml-1"
            />
          </v-list-item-title>
        </v-list-item>

        <!-- Secondary links -->
        <v-list-item
          v-for="link in secondaryNavLinks?.slice(1).reverse()"
          :key="link.text"
          :to="link.to"
          :href="link.href"
          :prepend-icon="link.icon"
          :target="link.openInNew ? '_blank' : undefined"
          :rel="link.openInNew ? 'noopener nofollow' : undefined"
          slim
          exact
        >
          <v-list-item-title class="text-subtitle-1 font-weight-bold py-1">
            {{ link.text }}
            <v-icon
              v-if="link.openInNew"
              :icon="mdiArrowTopRight"
              size="x-small"
              color="grey"
              class="ml-1"
            />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </nav>

    <template #append>
      <!-- Featured secondary link -->
      <div
        v-if="featuredSecondaryLink?.text"
        class="ma-2"
      >
        <v-btn
          :to="featuredSecondaryLink.to"
          :href="featuredSecondaryLink.href"
          :prepend-icon="featuredSecondaryLink.icon"
          variant="flat"
          size="large"
          :target="featuredSecondaryLink.openInNew ? '_blank' : undefined"
          :rel="featuredSecondaryLink.openInNew ? 'noopener nofollow' : undefined"
          block
        >
          {{ featuredSecondaryLink.text }}
          <v-icon
            v-if="featuredSecondaryLink.openInNew"
            :icon="mdiArrowTopRight"
            size="small"
            class="ml-1"
          />
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
