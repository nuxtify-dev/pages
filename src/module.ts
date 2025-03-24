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
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Install modules
    await installModule('vuetify-nuxt-module', {
      vuetifyOptions: resolver.resolve('./runtime/vuetify.config.ts'),
    })

    // Expose module options to app config
    _nuxt.options.appConfig.nuxtify = defu(_nuxt.options.appConfig.nuxtify, {
      ..._options,
    })

    // Auto-import layouts
    addLayout({
      src: resolver.resolve('./runtime/layouts/default.vue'),
    })

    // Auto-import components
    addComponentsDir({
      path: resolver.resolve('runtime/components'),
    })

    // Auto-import composables
    addImportsDir(resolver.resolve('runtime/composables'))

    // Auto-import utils
    addImportsDir(resolver.resolve('runtime/utils'))

    // Extend pages
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
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
