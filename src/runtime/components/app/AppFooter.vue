<script setup lang="ts">
import { computed, useDisplay, useNuxtifyConfig } from '#imports'

// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()
const { xs } = useDisplay()

// Navigation
const footerPrimaryLinks = nuxtifyConfig.navigation?.altPrimary
const footerSecondaryLinks = nuxtifyConfig.navigation?.altSecondary

// COMPUTED
const brandColWidth = computed(() => {
  if (!footerPrimaryLinks) {
    return 12
  }
  else if (footerPrimaryLinks?.length >= 4) {
    return 4
  }
  return 6
})
</script>

<template>
  <v-footer
    class="bg-primary justify-center mt-8 mt-md-16"
    :class="{ 'text-center': xs }"
  >
    <v-row
      class="px-sm-1 pt-12 pb-4 mb-1"
      style="max-width: 1280px"
    >
      <v-col cols="12">
        <FooterCallToAction v-if="nuxtifyConfig.footer?.cta?.show" />

        <v-row class="mb-2">
          <!-- Brand -->
          <v-col
            cols="12"
            :lg="brandColWidth"
          >
            <!-- Logo -->
            <NuxtLink to="/">
              <AppLogo dark />
            </NuxtLink>

            <!-- Tagline -->
            <p class="mt-2 clip-text">
              {{ nuxtifyConfig.brand?.tagline }}
            </p>
          </v-col>

          <v-spacer />

          <!-- Primary Links -->
          <v-col :lg="12 - brandColWidth">
            <v-row>
              <v-col
                v-for="group in footerPrimaryLinks"
                :key="group.title"
                cols="12"
                sm="6"
                md="3"
                lg="3"
              >
                <p class="opacity-60 text-body-1 mb-4">
                  {{ group.title }}
                </p>
                <div
                  v-for="link in group.links"
                  :key="link.text"
                  class="mb-3"
                >
                  <NuxtLink
                    :to="link.to"
                    :href="link.href"
                    :target="link.openInNew ? '_blank' : undefined"
                    :rel="link.openInNew ? 'noopener nofollow' : undefined"
                    class="text-body-1 link-hover"
                  >
                    {{ link.text }}
                  </NuxtLink>
                  <v-icon
                    v-if="link.openInNew"
                    icon="mdi-arrow-top-right"
                    size="small"
                    color="grey"
                    class="ml-1"
                  />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            sm="9"
          >
            <AppCredits class="opacity-60" />

            <v-divider
              v-if="footerSecondaryLinks?.length"
              class="my-4"
              :class="{ 'mx-auto': xs }"
              style="width: 50px"
            />

            <!-- Secondary Links -->
            <span
              v-for="link in footerSecondaryLinks"
              :key="link.text"
              class="mb-2"
            >
              <NuxtLink
                :to="link.to"
                :href="link.href"
                :target="link.openInNew ? '_blank' : undefined"
                :rel="link.openInNew ? 'noopener nofollow' : undefined"
                class="text-grey text-caption font-weight-bold link-hover"
              >
                {{ link.text }}
              </NuxtLink>
              <v-icon
                v-if="link.openInNew"
                icon="mdi-arrow-top-right"
                size="x-small"
                color="grey"
                class="mr-2"
              />
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
/* Links */
a {
  color: inherit;
}

/* Max text width */
.clip-text {
  max-width: 600px;
}

.opacity-60 {
  opacity: 0.6;
}
</style>
