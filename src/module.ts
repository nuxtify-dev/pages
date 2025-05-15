import {
  addComponentsDir,
  addImportsDir,
  addLayout,
  addServerImportsDir,
  createResolver,
  defineNuxtModule,
  extendPages,
  installModule,
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'

// Types
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'nuxtifyPages',
    compatibility: {
      nuxt: '>=3.16.0',
      bridge: false,
    },
  },
  defaults: {
    // Navigation
    navigation: {
      primary: [],
      secondary: [],
      footerPrimary: [],
      footerSecondary: [],
    },

    // Footer
    footer: {
      copyright: '',
      cta: {
        show: false,
        title: '',
        subtitle: '',
        color: 'indigo',
      },
    },

    // Email
    email: {
      provider: {
        defaultSubmitUrl: '',
      },
    },

    // Style
    style: {
      btn: {
        rounded: true,
      },
    },
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Modules
    await installModule('vuetify-nuxt-module', {
      vuetifyOptions: {
        icons: {
          defaultSet: 'mdi-svg',
        },
        theme: {
          themes: {
            light: {
              colors: {
                primary: '#020420',
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
      },
    })

    // Expose module options to app config
    _nuxt.options.appConfig.nuxtify = defu(_nuxt.options.appConfig.nuxtify, {
      ..._options,
    })

    // Layouts
    addLayout({
      src: resolver.resolve('./runtime/layouts/DefaultLayout.vue'),
    }, 'default')

    // Components
    addComponentsDir({
      path: resolver.resolve('./runtime/components'),
    })

    // Composables
    addImportsDir(resolver.resolve('./runtime/composables'))
    addServerImportsDir(resolver.resolve('./runtime/server/composables'))

    // Utils
    addImportsDir(resolver.resolve('./runtime/utils'))
    addServerImportsDir(resolver.resolve('./runtime/server/utils'))

    // Pages
    extendPages((pages) => {
      // Index
      pages.unshift({
        name: 'index',
        path: '/',
        file: resolver.resolve('./runtime/pages/IndexPage.vue'),
      })

      // Dynamic slug
      pages.unshift({
        name: 'slug',
        path: '/:slug',
        file: resolver.resolve('./runtime/pages/DynamicSlug.vue'),
      })
    })
  },
})
