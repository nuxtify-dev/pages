import {
  defineNuxtModule,
  addComponentsDir,
  addImportsDir,
  addLayout,
  addPlugin,
  createResolver,
  extendPages,
  installModule,
} from '@nuxt/kit'
import { defu } from 'defu'

// Types
import type { ModuleOptions } from '../src/runtime/types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtify-pages',
    configKey: 'nuxtify',
    compatibility: {
      nuxt: '>=3.16.0',
      bridge: false,
    },
  },
  defaults: {
    brand: {
      name: 'nuxtify-pages',
      domain: '',
      tagline: '',
      logo: {
        lightUrl: '',
        darkUrl: '',
        width: 200,
        mobileWidth: 150,
      },
    },
    announcement: {
      show: false,
      message: '',
      buttonText: '',
      buttonUrl: '',
    },
    navigation: {
      primary: [],
      secondary: [],
    },
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Modules
    await installModule('vuetify-nuxt-module', {
      vuetifyOptions: resolver.resolve('runtime/vuetify.config.ts'),
    })

    // Expose module options to app config
    _nuxt.options.appConfig.nuxtify = defu(_nuxt.options.appConfig.nuxtify, {
      ..._options,
    })

    // Layouts
    addLayout({
      src: resolver.resolve('runtime/layouts/default.vue'),
    }, 'default')

    // Components
    addComponentsDir({
      path: resolver.resolve('runtime/components'),
    })

    // Composables
    addImportsDir(resolver.resolve('runtime/composables'))

    // Utils
    addImportsDir(resolver.resolve('runtime/utils'))

    // Pages
    extendPages((pages) => {
      // Index
      pages.push({
        name: 'index',
        path: '/',
        file: resolver.resolve('runtime/pages/index.vue'),
      })

      // Dynamic slug
      pages.push({
        name: 'slug',
        path: '/:slug',
        file: resolver.resolve('runtime/pages/[slug].vue'),
      })
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('runtime/plugin'))
  },
})
