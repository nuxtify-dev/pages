<script setup lang="ts">
import { isTitledLinks, useDisplay, useDrawer, useNuxtifyConfig } from '#imports'

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
  <v-app-bar
    :density="smAndDown ? 'compact' : 'default'"
    flat
    class="px-sm-2 bottom-border"
  >
    <template #prepend>
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="d-flex align-center ml-2"
      >
        <AppLogo />
      </NuxtLink>
    </template>

    <!-- Desktop navigation -->
    <div
      v-if="!smAndDown"
      class="d-flex align-center"
    >
      <!-- Primary links -->
      <template
        v-for="item in primaryNavLinks"
        :key="isTitledLinks(item) ? `group-${item.title}` : `link-${item.text}`"
      >
        <!-- Titled dropdown -->
        <v-menu
          v-if="isTitledLinks(item)"
          open-on-hover
          :open-delay="100"
          :close-delay="150"
          offset="8"
        >
          <template #activator="{ props: menuProps, isActive }">
            <v-btn
              v-bind="menuProps"
              :active="false"
              slim
              :ripple="false"
              size="large"
              color="unset"
              class="nav-items mx-2"
            >
              {{ item.title }}
              <template #append>
                <v-icon
                  icon="mdi-chevron-down"
                  size="small"
                  class="nav-chevron"
                  :class="{ 'rotate-180': isActive }"
                />
              </template>
            </v-btn>
          </template>

          <v-list
            nav
            elevation="3"
            rounded="lg"
            min-width="280"
            max-width="360"
            class="pa-2 border"
          >
            <v-list-item
              v-for="link in item.links"
              :key="link.text"
              :to="link.to"
              :href="link.href"
              :target="link.openInNew ? '_blank' : undefined"
              :rel="link.openInNew ? 'noopener nofollow' : undefined"
              :lines="link.description ? 'two' : 'one'"
              rounded="md"
              color="primary"
              exact
              class="py-2"
            >
              <template
                v-if="link.icon"
                #prepend
              >
                <v-icon
                  :icon="link.icon"
                  color="secondary"
                />
              </template>

              <v-list-item-title class="text-body-2 font-weight-bold d-flex align-center">
                {{ link.text }}
                <v-icon
                  v-if="link.openInNew"
                  icon="mdi-arrow-top-right"
                  size="x-small"
                  color="grey"
                  class="ml-1"
                />
              </v-list-item-title>

              <v-list-item-subtitle
                v-if="link.description"
                class="nav-dropdown-description text-caption mt-1"
              >
                {{ link.description }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Flat link -->
        <v-btn
          v-else
          :to="item.to"
          :href="item.href"
          :active="false"
          :prepend-icon="item.icon"
          slim
          exact
          :ripple="false"
          size="large"
          color="unset"
          :target="item.openInNew ? '_blank' : undefined"
          :rel="item.openInNew ? 'noopener nofollow' : undefined"
          class="nav-items mx-2"
        >
          {{ item.text }}
          <v-icon
            v-if="item.openInNew"
            icon="mdi-arrow-top-right"
            size="x-small"
            color="grey"
            class="ml-1"
          />
        </v-btn>
      </template>
    </div>

    <template #append>
      <!-- Mobile navigation -->
      <v-app-bar-nav-icon
        v-if="smAndDown"
        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
        color="primary"
        aria-label="Navigation Menu"
        @click="drawer = !drawer"
      />

      <!-- Desktop navigation -->
      <nav
        v-else
        class="d-flex align-center"
      >
        <!-- Secondary links -->
        <v-btn
          v-for="link in secondaryNavLinks?.slice(1).reverse()"
          :key="link.text"
          :to="link.to"
          :href="link.href"
          :prepend-icon="link.icon"
          :active="false"
          size="large"
          color="unset"
          :target="link.openInNew ? '_blank' : undefined"
          :rel="link.openInNew ? 'noopener nofollow' : undefined"
          class="nav-items mx-2"
        >
          {{ link.text }}
          <v-icon
            v-if="link.openInNew"
            icon="mdi-arrow-top-right"
            size="x-small"
            color="grey"
            class="ml-1"
          />
        </v-btn>

        <!-- Featured secondary link -->
        <v-btn
          v-if="featuredSecondaryLink?.text"
          :to="featuredSecondaryLink.to"
          :href="featuredSecondaryLink.href"
          :prepend-icon="featuredSecondaryLink.icon"
          :active="false"
          variant="flat"
          size="large"
          :target="featuredSecondaryLink.openInNew ? '_blank' : undefined"
          :rel="featuredSecondaryLink.openInNew ? 'noopener nofollow' : undefined"
          class="mx-2"
        >
          {{ featuredSecondaryLink.text }}
          <v-icon
            v-if="featuredSecondaryLink.openInNew"
            icon="mdi-arrow-top-right"
            size="small"
            class="ml-1"
          />
        </v-btn>
      </nav>
    </template>
  </v-app-bar>
</template>

<style scoped>
/* Links */
a {
  text-decoration: none;
}

/* Nav links hover */
.nav-items:hover {
  color: rgb(var(--v-theme-secondary)) !important;
}
:deep(.v-btn--variant-text .v-btn__overlay) {
  background-color: transparent;
}

/* Bottom border */
.bottom-border {
  border-bottom: 1px solid rgb(231, 237, 246);
}

/* Vuetify app bar overrides */
:deep(.v-toolbar__content) {
  align-self: center;
  max-width: 1280px;
}
:deep(.v-toolbar__prepend) {
  margin-inline: 4px 12px;
}

/* Fix for emoji misalignment in button text */
:deep(.v-btn__content) {
  line-height: 1;
}

/* Dropdown chevron transition */
.nav-chevron {
  transition: transform 0.2s ease;
}
.rotate-180 {
  transform: rotate(180deg);
}

/* Allow full nav item descriptions to wrap cleanly */
.nav-dropdown-description {
  display: block;
  -webkit-line-clamp: unset;
}
</style>
