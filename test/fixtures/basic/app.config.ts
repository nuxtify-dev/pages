export default defineAppConfig({
  nuxtify: {
    brand: {
      name: 'Test Brand',
    },
    navigation: {
      primary: [
        {
          text: 'Features',
          to: '/features',
        },
        {
          title: 'Resources',
          links: [
            {
              text: 'Docs',
              description: 'Guides and module examples.',
              icon: 'mdi-book-open-outline',
              to: '/docs',
            },
            {
              text: 'Website',
              description: 'Visit the external site.',
              icon: 'mdi-open-in-new',
              href: 'https://nuxtify.dev',
              openInNew: true,
            },
          ],
        },
      ],
    },
  },
})
