import {
  addComponentsDir,
  addImportsDir,
  addLayout,
  createResolver,
  defineNuxtModule,
  extendPages,
  useLogger,
} from '@nuxt/kit'
import { defu } from 'defu'
import { name, version } from '../package.json'

// Types
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>().with({
  meta: {
    name,
    version,
    configKey: 'nuxtifyPages',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },
  moduleDependencies: {
    '@nuxtify/core': {
      version: '>=0.1.11',
    },
  },
  defaults: {
    // Brand
    brand: {
      name,
    },

    // Footer
    footer: {
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
  async setup(resolvedOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const logger = useLogger('nuxtify-pages')

    // Expose module options to app config
    nuxt.options.appConfig.nuxtify = defu(nuxt.options.appConfig.nuxtify, {
      ...resolvedOptions,
    })

    // Layouts
    addLayout({
      src: resolve('./runtime/layouts/DefaultLayout.vue'),
    }, 'default')

    // Components
    addComponentsDir({
      path: resolve('./runtime/components'),
    })

    // Composables
    addImportsDir(resolve('./runtime/composables'))

    // Utils
    addImportsDir(resolve('./runtime/utils'))

    // Pages
    extendPages((pages) => {
      // Index
      pages.unshift({
        name: 'index',
        path: '/',
        file: resolve('./runtime/pages/IndexPage.vue'),
      })

      // Dynamic slug
      pages.unshift({
        name: 'slug',
        path: '/:slug',
        file: resolve('./runtime/pages/DynamicSlug.vue'),
      })
    })

    // Remove duplicate imports (to suppress Nuxt warnings)
    nuxt.hook('imports:extend', (imports) => {
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
        if (resolvedOptions.verboseLogs) logger.info('Intentionally overriding useNuxtifyConfig from @nuxtify/core.')
      }
    })
  },
})
