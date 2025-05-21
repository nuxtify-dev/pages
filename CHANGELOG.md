# Changelog

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
