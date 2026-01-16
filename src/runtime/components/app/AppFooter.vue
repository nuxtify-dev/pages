<script setup lang="ts">
import { computed, mdiArrowTopRight, useNuxtifyConfig } from '#imports'

// STATE - GLOBAL
const nuxtifyConfig = useNuxtifyConfig()

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
              cols="6"
              md="3"
              lg="3"
            >
              <p class="text-body-1 font-weight-bold mb-3">
                {{ group.title }}
              </p>
              <div
                v-for="link in group.links"
                :key="link.text"
              >
                <v-btn
                  :to="link.to"
                  :href="link.href"
                  variant="text"
                  :active="false"
                  :ripple="false"
                  :target="link.openInNew ? '_blank' : undefined"
                  :rel="link.openInNew ? 'noopener nofollow' : undefined"
                  class="px-0"
                >
                  {{ link.text }}
                  <v-icon
                    v-if="link.openInNew"
                    :icon="mdiArrowTopRight"
                    size="small"
                    color="grey"
                    class="ml-1"
                  />
                </v-btn>
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
          <AppCredits />

          <v-divider
            v-if="footerSecondaryLinks?.length"
            class="my-4"
            style="width: 50px"
          />

          <!-- Secondary Links -->
          <v-btn
            v-for="link in footerSecondaryLinks"
            :key="link.text"
            :to="link.to"
            :href="link.href"
            variant="plain"
            size="small"
            :ripple="false"
            :target="link.openInNew ? '_blank' : undefined"
            :rel="link.openInNew ? 'noopener nofollow' : undefined"
            class="text-capitalize pl-0 mb-2"
          >
            {{ link.text }}
            <v-icon
              v-if="link.openInNew"
              :icon="mdiArrowTopRight"
              size="small"
              color="grey"
              class="ml-1"
            />
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped>
/* Links */
a {
  color: inherit;
  text-decoration: none;
  justify-content: start;
}
.v-btn:hover,
a:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* No hover on buttons */
:deep(.v-btn:hover > .v-btn__overlay) {
  opacity: 0;
}

/* Max text width */
.clip-text {
  max-width: 600px;
}
</style>
