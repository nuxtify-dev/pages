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
  <v-navigation-drawer
    v-if="smAndDown"
    v-model="drawer"
    location="right"
  >
    <nav>
      <v-list nav>
        <!-- Primary links -->
        <template
          v-for="item in primaryNavLinks"
          :key="isTitledLinks(item) ? `group-${item.title}` : `link-${item.text}`"
        >
          <!-- Titled dropdown -->
          <v-list-group
            v-if="isTitledLinks(item)"
            :value="item.title"
            fluid
          >
            <template #activator="{ props: activatorProps }">
              <v-list-item
                v-bind="activatorProps"
                color="primary"
                slim
              >
                <v-list-item-title class="text-subtitle-1 font-weight-bold py-1">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </template>

            <v-list-item
              v-for="link in item.links"
              :key="link.text"
              :to="link.to"
              :href="link.href"
              :prepend-icon="link.icon"
              :lines="link.description ? 'two' : 'one'"
              color="primary"
              :target="link.openInNew ? '_blank' : undefined"
              :rel="link.openInNew ? 'noopener nofollow' : undefined"
              slim
              exact
            >
              <v-list-item-title class="text-body-2 font-weight-bold">
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
                class="nav-drawer-description text-caption"
              >
                {{ link.description }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list-group>

          <!-- Flat link -->
          <v-list-item
            v-else
            :to="item.to"
            :href="item.href"
            :prepend-icon="item.icon"
            :lines="item.description ? 'two' : 'one'"
            color="primary"
            :target="item.openInNew ? '_blank' : undefined"
            :rel="item.openInNew ? 'noopener nofollow' : undefined"
            slim
            exact
          >
            <v-list-item-title class="text-subtitle-1 font-weight-bold py-1">
              {{ item.text }}
              <v-icon
                v-if="item.openInNew"
                icon="mdi-arrow-top-right"
                size="x-small"
                color="grey"
                class="ml-1"
              />
            </v-list-item-title>
            <v-list-item-subtitle
              v-if="item.description"
              class="text-caption"
            >
              {{ item.description }}
            </v-list-item-subtitle>
          </v-list-item>
        </template>

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
              icon="mdi-arrow-top-right"
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
            icon="mdi-arrow-top-right"
            size="small"
            class="ml-1"
          />
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
:deep(.v-list-group__items) {
  --v-list-indent: 8px;
}

:deep(.v-list-group__items .v-list-item) {
  --v-list-prepend-gap: 12px;
}

.nav-drawer-description {
  display: block;
  -webkit-line-clamp: unset;
}
</style>
