export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2026-01-15',
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
            { text: 'Team', to: '/team' },
            { text: 'Careers', to: '/careers' },
          ],
        },
        {
          title: 'Support',
          links: [
            { text: 'Contact', to: '/contact' },
            { text: 'Documentation', to: '/docs' },
            { text: 'Help', to: '/help' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { text: 'Blog', to: '/blog' },
            { text: 'Podcast', to: '/podcast' },
            { text: 'Free Guide', to: '/guide' },
          ],
        },
        {
          title: 'Ecosystem',
          links: [
            { text: 'Partners', to: '/partners' },
            { text: 'Affiliates', to: '/affiliates' },
            { text: 'Themes', to: '/themes' },
            { text: 'Plugins', to: '/plugins' },
            { text: 'Integrations', to: '/integrations' },
          ],
        },
      ],
      altSecondary: [
        { text: 'Privacy', to: '/privacy' },
        { text: 'Terms', to: '/terms' },
      ],
    },

    // Announcement
    announcement: {
      show: true,
      message: 'This is a site wide announcement!',
      buttonText: 'Click me',
      buttonUrl: 'https://nuxtify.dev/',
    },

    // Credits
    credits: {
      creator: {
        name: 'Nuxtify',
        domain: 'nuxtify.dev',
      },
      prependText: 'Made with love by',
      appendText: ' Ship weirdly fast.',
    },
  },
})
