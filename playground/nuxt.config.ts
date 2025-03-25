export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-03-22',
  nuxtify: {
    brand: {
      name: 'nuxtify-pages-playground',
    },
    navigation: {
      primary: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'External', href: 'https://nuxtify.dev', openInNew: true },
      ],
      secondary: [
        { text: 'Sign Up', to: '/signup' },
        { text: 'Sign In', to: '/signin' },
        { text: 'Help', to: '/help' },
      ],
    },
  },
})
