import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  icons: {
    defaultSet: 'mdi-svg',
  },
  theme: {
    themes: {
      light: {
        colors: {
          secondary: '#00DC82',
          background: '#fff',
        },
      },
    },
  },
  defaults: {
    VBtn: { color: 'secondary', variant: 'flat', class: 'text-none' },
    VAlert: {
      VBtn: { color: 'inherit' },
    },
    VFooter: {
      VBtn: { color: 'inherit' },
    },
  },
})
