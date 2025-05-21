import {
  addComponentsDir,
  addImportsDir,
  addLayout,
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
    // Brand
    brand: {
      name,
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

    // Expose module options to app config
    _nuxt.options.appConfig.nuxtify = defu(_nuxt.options.appConfig.nuxtify, {
      ..._options,
    })

    // Modules
    await installModule('@nuxtify/core', {
      verboseLogs: _options.verboseLogs,
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

    // Utils
    addImportsDir(resolver.resolve('./runtime/utils'))

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

    // Remove duplicate imports (to suppress Nuxt warnings)
    _nuxt.hook('imports:extend', (imports) => {
      // Find and remove the 'useNuxtifyConfig' import that comes from '@nuxtify/core'
      const coreImportIndex = imports.findIndex(
        (imp) => {
          // The 'name' property refers to the exported name of the composable.
          // The 'from' property is the path to the source file.
          return (imp.as || imp.name) === 'useNuxtifyConfig' && imp.from.includes('@nuxtify/core')
        },
      )

      if (coreImportIndex > -1) {
        imports.splice(coreImportIndex, 1)
        if (_options.verboseLogs) console.log('[nuxtify-pages] Intentionally overriding useNuxtifyConfig from @nuxtify/core.')
      }
    })
  },
})
