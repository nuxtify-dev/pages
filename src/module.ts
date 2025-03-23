import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  installModule,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtify-pages',
    configKey: 'nuxtify',
    compatibility: {
      nuxt: '>=3.16.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Install modules
    await installModule('vuetify-nuxt-module', {
      vuetifyOptions: resolver.resolve('./runtime/vuetify.config.ts'),
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
