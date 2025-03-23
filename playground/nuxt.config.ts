export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-03-22',
  nuxtify: {
    brand: {
      name: 'nuxtify-pages-playground',
    },
  },
})
