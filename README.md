<div align=center>
  <img src="https://nuxtify.dev/img/nuxtify-wordmark-dark.png"/>
</div>
<p align=center>
  Build progressively enhanced web apps and sites with Nuxt and Vuetify.
</p>

# Nuxtify Pages

<!-- [![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxtify Docs][nuxtify-src]][nuxtify-href] -->
<!-- [🏀 Online playground](https://stackblitz.com/github/nuxtifydev/pages?file=playground%2Fapp.vue) -->

### Table of Contents

- ♾️ [Why Nuxtify?](#why-nuxtify)
- ✨ [Features](#features)
- 🚀 [Quick Start](#quick-start)
- 🔧 [Configuration](#configuration)
- ✅ [Updates](#updates)
- ❤️ [Contributing](#contributing)
- 🏠 [Local Development](#local-development)
- ⚖️ [License](#license)

## <a name="why-nuxtify">♾️ Why Nuxtify?</a>

Nuxtify is a collection of [Nuxt modules](https://nuxt.com/docs/guide/concepts/modules) that will help you stay organized, maintain focus, and _ship weirdly fast_.

It's built on a loosely opinionated stack that eliminates decision fatigue and ensures consistency across projects. This extensible approach gives you incredible control over your site's structure and style.

Once you add a Nuxtify module (like this one) to a new or existing Nuxt project, you can use any of the components, composables, and other features instantly – no imports necessary. And more importantly, you can override these defaults with your own version at any time.

**This unlocks a powerful way of working.**

Use the defaults when they're helpful, and progressively upgrade when they're not.

This means you can:

- Setup a new project using the default configuration in a matter of minutes.
- Use the default footer component, but completely change the navigation component.
- Change the colors of all the buttons with one line of code.
- Override the default button component with a style of your choosing.
- And much more...

In short, Nuxtify helps you build faster, iterate smarter, and maintain consistency – without sacrificing control or creativity.

## <a name="features">✨ Features</a>

Nuxtify builds on the amazing features of [Vue](https://vuejs.org/guide/introduction), [Nuxt](https://nuxt.com/docs/getting-started/introduction), and [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify/).

### 💡 Intuitive UI & UX

- Ready to use components, page templates, sections, and layouts so you can _ship weirdly fast_
- Easily override any component with [Vuetify global defaults](https://vuetifyjs.com/en/features/global-configuration/)
- Icons powered by [Material Design Icons](https://pictogrammers.com/library/mdi/) via [Vuetify icon fonts](https://vuetifyjs.com/en/features/icon-fonts/)
- Fully responsive and adapts to all modern browsers and devices
- (coming soon) Light and dark mode toggle

### 💎 Premium DX

- Zero-config with sensible defaults for common use cases
- All components use the modern [Vue Composition API](https://vuejs.org/guide/extras/composition-api-faq) and [Single File Component (SFC) syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [TypeScript](https://www.typescriptlang.org/) auto-complete and type safety for all components
- [ESLint](https://eslint.org/) support out of the box using flat config (v9)
- Identify performance gaps and seamlessly manage your app with [Nuxt Devtools](https://devtools.nuxt.com/)
- Clean, elegant code that's easy to understand and customize
- Loosely opinionated, leveraging ecosystem standards so you're not locked into outdated dependencies and practices

### 🤖 Smart SEO, Security, & Performance

- Fully tree shakeable for small bundle sizes
- Robots, sitemaps, schema.org, social share images, broken links, and more powered by [Nuxt SEO](https://nuxtseo.com/)
- Optimized caching and rendering strategies for each page with [hybrid rendering](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering)
- (coming soon) Fast, responsive, optimized images for [20+ image providers](https://image.nuxt.com/get-started/providers) powered by [Nuxt Image](https://image.nuxt.com/)
- (coming soon) Load third-party scripts with better performance, privacy, security powered by [Nuxt Scripts](https://scripts.nuxt.com/)
- (coming soon) Optimal security patterns and principles powered by [Nuxt Security](https://nuxt.com/modules/security)

### 🌐 Host Anywhere

- Deploy to any Node.js server, static host, or serverless edge CDN environment with [20+ hosting providers](https://nuxt.com/deploy) supported

## <a name="quick-start">🚀 Quick Start</a>

To use this module in your [new](https://nuxt.com/docs/getting-started/installation) or existing Nuxt project:

### 1. Install the module

Install the module in your Nuxt application with one command:

```bash
npx nuxi@latest module add @nuxtify/pages
```

### 2. Update Nuxt config

Add the `@nuxtify/pages` module to `nuxt.config.ts` and configure it:

```ts
// nuxt.config.ts

export default defineNuxtConfig({
  modules: [
    '@nuxtify/pages'
  ],
  nuxtify: {
    /* module specific options */
  }
});
```

Read the [📖 documentation](https://nuxtify.dev/docs) for a complete guide on how to configure and use this module.

### 3. Start building!

Develop and [deploy](https://nuxt.com/docs/getting-started/deployment) your Nuxt app like any other.

## <a name="configuration">🔧 Configuration</a>

### Module configuration

To see the full config, check out the [types](https://github.com/nuxtifydev/pages/blob/main/src/types.ts).

### Overriding the defaults

Nuxtify comes pre-configured with sensible defaults. Both for how the module functions and for the corresponding Nuxt [directory](https://nuxt.com/docs/guide/directory-structure).

If you need to override a [component](https://nuxt.com/docs/guide/directory-structure/components), [page](https://nuxt.com/docs/guide/directory-structure/pages), or [layout](https://nuxt.com/docs/guide/directory-structure/layouts), create the a file of the same name in your project (in the appropriate directory).

If you need to override a [composable](https://nuxt.com/docs/guide/directory-structure/composables) or [utils](https://nuxt.com/docs/guide/directory-structure/utils) utility function, create a function of the same name in your project (in the appropriate directory).

## <a name="updates">✅ Updates</a>

[✨ Release Notes](/CHANGELOG.md)

It's easy to stay up to date with the latest version of Nuxtify. Just update to the latest package from your favorite package manager.

**Minor and patch versions**
```bash
npm update @nuxtify/pages --save
```

**Major versions**
```bash
npm install @nuxtify/pages@latest --save
```

## <a name="contributing">❤️ Contributing</a>

I invite you to contribute and help improve Nuxtify!

Here are a few ways you can get involved:

- **Reporting Bugs:** If you come across any bugs or issues, please [open a new issue](https://github.com/nuxtifydev/pages/issues/new).
- **Suggestions:** Have ideas to enhance Nuxtify? I'd love to hear them! You can [open a new issue](https://github.com/nuxtifydev/pages/issues/new) describing your feature request or suggestion.
- **Local Development:** contribute directly to the framework with a pull request. Just follow the instructions below.

## <a name="local-development">🏠 Local Development</a>

<details>
  <summary>CLI commands</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

Learn about [authoring Nuxt modules](https://nuxt.com/docs/guide/going-further/modules).

## <a name="license">⚖️ License</a>

[MIT](https://github.com/nuxtifydev/pages/blob/main/LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxtify/pages/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nuxtify/pages
[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtify/pages.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@nuxtify/pages
[license-src]: https://img.shields.io/npm/l/@nuxtify/pages.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nuxtify/pages
[nuxtify-src]: https://img.shields.io/badge/Nuxtify_Docs-00DC82
[nuxtify-href]: https://nuxtify.dev/docs
