export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-05-13',
  nuxtifyPages: {
    // Logs
    verboseLogs: true,

    // Brand
    brand: {
      tagline: 'This is a sample tagline for the pages module.',
    },

    // Email
    email: {
      general: 'hello@nuxtify.dev',
      support: 'support@nuxtify.dev',
    },

    // Navigation
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
      altPrimary: [
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
      altSecondary: [
        { text: 'Privacy', to: '/privacy' },
        { text: 'Terms', to: '/terms' },
      ],
    },
  },
})
