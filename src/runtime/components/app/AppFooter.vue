<script setup lang="ts">
import { mdiArrowTopRight, useNuxtifyConfig } from '#imports'

// App state
const nuxtifyConfig = useNuxtifyConfig()

// Navigation
const footerPrimaryLinks = nuxtifyConfig.navigation?.altPrimary
const footerSecondaryLinks = nuxtifyConfig.navigation?.altSecondary
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
          :lg="footerPrimaryLinks?.length === 4 ? 3 : 4"
        >
          <!-- Logo -->
          <AppLogo dark />

          <!-- Tagline -->
          <p class="mt-2 clip-text">
            {{ nuxtifyConfig.brand?.tagline }}
          </p>
        </v-col>

        <v-spacer />

        <!-- Primary Links -->
        <v-col
          v-for="group in footerPrimaryLinks"
          :key="group.title"
          cols="6"
          md="3"
          lg="2"
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

      <v-row>
        <v-col
          cols="12"
          sm="9"
        >
          <small>
            <!-- Credits -->
            {{ nuxtifyConfig.credits?.prependText }}
            <span v-if="nuxtifyConfig.credits?.creator?.name">
              <a
                v-if="nuxtifyConfig.credits.creator.domain"
                :href="`https://${nuxtifyConfig.credits.creator.domain}/?utm_source=${nuxtifyConfig.brand?.domain}&utm_medium=referral&utm_campaign=createdby`"
                target="_blank"
                rel="noopener nofollow"
                class="font-weight-bold"
              >{{ nuxtifyConfig.credits?.creator?.name }}</a><span v-else>{{ nuxtifyConfig.credits?.creator?.name }}</span>.
            </span>

            <!-- Message -->
            {{ nuxtifyConfig.credits?.appendText }}

            <!-- Powered By -->
            <span v-if="nuxtifyConfig.credits?.showPoweredBy">
              <a
                :href="`https://nuxtify.dev/?utm_source=${nuxtifyConfig.brand?.domain}&utm_medium=referral&utm_campaign=poweredby`"
                target="_blank"
                rel="noopener nofollow"
              >Powered by Nuxtify</a>.
            </span>
          </small>

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
