export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-03-22',
  nuxtify: {
    brand: {
      name: '@nuxtify/pages playground',
    },
    announcement: {
      show: true,
      message: 'Welcome to the @nuxtify/pages playground!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },
    navigation: {
      primary: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Test', to: '/test' },
        { text: 'External', href: 'https://nuxtify.dev', openInNew: true },
      ],
      secondary: [
        { text: 'Sign Up', to: '/signup' },
        { text: 'Sign In', to: '/signin' },
        { text: 'Help', to: '/help' },
      ],
      footerPrimary: [
        {
          title: 'Product',
          links: [
            { text: 'Features', to: '/features' },
            { text: 'Pricing', to: '/pricing' },
            { text: 'Changelog', to: '/changelog' },
          ],
        },
        {
          title: 'Company',
          links: [
            { text: 'About', to: '/about' },
            { text: 'Careers', to: '/careers' },
            { text: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { text: 'Blog', to: '/blog' },
            { text: 'Documentation', to: '/docs' },
            { text: 'Help', to: '/help' },
          ],
        },
      ],
      footerSecondary: [
        { text: 'Privacy', to: '/privacy' },
        { text: 'Terms', to: '/terms' },
      ],
    },
  },
})
