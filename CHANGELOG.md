# Changelog

## v0.6.1

[compare changes](https://github.com/nuxtify-dev/pages/compare/v0.6.0...v0.6.1)

### 💅 Refactors

- Make footer tag part of AppFooter ([e9560e5](https://github.com/nuxtify-dev/pages/commit/e9560e5))

### UI

- ui: update email subscribe form
- ui: add top margin to footer on bigger screens
- ui: make footer links more prominent

### ❤️ Contributors

- David Stack ([@davidstackio](https://github.com/davidstackio))

## v0.6.0

[compare changes](https://github.com/nuxtify-dev/pages/compare/v0.5.1...v0.6.0)

### 🩹 Fixes

- Don't override slug pages ([b14a239](https://github.com/nuxtify-dev/pages/commit/b14a239))

### 💅 Refactors

- ⚠️ Rename to AppHeader ([117ec71](https://github.com/nuxtify-dev/pages/commit/117ec71))

### 🏡 Chore

- Spelling ([0fc8d4a](https://github.com/nuxtify-dev/pages/commit/0fc8d4a))

### ✅ Tests

- Fix basic test ([e5a1d92](https://github.com/nuxtify-dev/pages/commit/e5a1d92))

#### ⚠️ Breaking Changes

- ⚠️ Rename to AppHeader ([117ec71](https://github.com/nuxtify-dev/pages/commit/117ec71))

### ❤️ Contributors

- David Stack ([@davidstackio](https://github.com/davidstackio))

## v0.5.1

[compare changes](https://github.com/nuxtify-dev/pages/compare/v0.5.0...v0.5.1)

### 💅 Refactors

- **playground:** Move nuxtify to app config ([74aeff1](https://github.com/nuxtify-dev/pages/commit/74aeff1))

### ❤️ Contributors

- David Stack ([@davidstackio](https://github.com/davidstackio))

## [0.5.0] - 2026-01-15

Nuxt 4 support.

### 🚨 Breaking Changes

- chore(deps)!: upgrade to nuxt 4

### Changes

- fix: replace deprecated server seo meta composable
- chore(deps): update nuxtify core
- chore(deps): update dev package majors
- chore(deps): update typescript
- chore: delete .npmrc

## [0.4.6] - 2025-01-15

- ux: clicking the footer logo navigates home
- refactor: update core module logic to match docs
- dx: add lint:fix npm command
- chore(deps): update nuxt 3.x
- chore(deps): update nuxtify core and typescript
- chore(deps): update dev packages

## [0.4.5] - 2025-11-13

- ui: add spacing to footer brand

## [0.4.4] - 2025-11-13

- refactor!: rename `hover-link` class to `link-hover`

## [0.4.3] - 2025-11-13 (Unpublished)

This version was not published to npm. Use `v0.4.4` instead.

### Changes

- feat: add `hover-link` class
- ui: more than 4 footer groups
- dx: add eslint warn import order rule
- chore(deps): update nuxtify core

## [0.4.2] - 2025-06-24

- dx: add eslint module
- refactor: use nuxt kit logger instead of console
- chore(deps): update nuxtify core

## [0.4.1] - 2025-06-17

### 🚨 Breaking Changes

- ui!: remove footer copyright

### Changes

- feat: useNuxtifySiteTitle in default layout
- refactor: use AppCredits component
- chore(deps): update packages
- chore: remove unnecessary imports
- docs: add nuxtify app section

## [0.4.0] - 2025-05-21

### 🚨 Breaking Changes

- Change `nuxtifyConfig.navigation.footerPrimary` to `nuxtifyConfig.navigation.altPrimary`.
- Change `nuxtifyConfig.navigation.footerSecondary` to `nuxtifyConfig.navigation.altSecondary`.

### Changes

- fix: undefined error
- refactor!: rename navigation config names
- refactor: move navigation config to core
- refactor(playground): simplify brand name
- chore(deps): update minors

## [0.3.3] - 2025-05-16

- fix(types): extend core email type

## [0.3.2] - 2025-05-16

It is now recommended to use a single nuxtify module config key (merge `nuxtifyCore` into `nuxtifyPages`).

### Changes

- feat: use a single nuxt config key
- fix: use new nuxtifyConfig keys
- fix(types): nuxtifyConfig
- dx: suppress duplicate imports warnings
- chore(deps): update nuxtify core

## [0.3.1] - 2025-05-15

- fix(deps): explicitly add defu

## [0.3.0] - 2025-05-15

_This release was not published to npm due to a build error. Please use `v0.3.1`._

### 🚨 Breaking Changes

- Change `nuxtifyConfig.footer.credits` to `nuxtifyConfig.credits`.
- Change `nuxtifyConfig.pages.policies` to `nuxtifyConfig.policies`.

### Changes

- refactor!: use @nuxtify/core module

### Fixes

- fix: add dialog to default layout
- fix: use brand name variable for index page
- fix: slug and unslugify utils
- fix: add license

### DX

- dx: playground improvements
- docs: update readme
- chore(deps): update packages

## [0.2.1] - 2025-05-08

- chore(deps): update nuxt minor
- chore(deps): update minors

## [0.2.0] - 2025-05-02

### 🚨 Breaking Changes

- Change `nuxtify` module key to `nuxtifyPages`

### Changes

- dx!: change module config key
- build!: remove .cjs and update to latest module builder
- ui: add 1200 character form rule
- chore(deps): update nuxt
- chore(deps): update minors

## [0.1.0] - 2025-04-04

- chore: install and configure Nuxt and Vuetify
- chore: setup dev environment (TypeScript, eslint, etc)
- docs: add readme and changelog
- feat: add initial set of features

## Meta

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/).
