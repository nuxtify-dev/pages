# Nuxtify Pages (Nuxt Module)

This document provides a comprehensive overview of the **@nuxtify/pages** Nuxt module, which powers single and multi-page website layouts. It contains the project architecture, development conventions, and building/testing commands to guide future development, maintenance, and automated assistance.

---

## 1. Project Overview & Architecture

**@nuxtify/pages** is an open-source Nuxt module built on top of Nuxt 4 and Vuetify 3 (via `@nuxtify/core`). It provides pre-packaged, extensible UI layouts, pages, components, and composables (such as footer components, newsletters, navigation, and page templates) so developers can _ship weirdly fast_.

### Key Technologies

- **Framework:** [Nuxt](https://nuxt.com/) (version 4 compatibility)
- **UI Framework:** [Vuetify 3](https://vuetifyjs.com/) via the `vuetify-nuxt-module`
- **Build Tooling:** `@nuxt/module-builder`
- **Testing:** [Vitest](https://vitest.dev/) with `@nuxt/test-utils`
- **Linting & Code Style:** ESLint flat config v9 (`@nuxt/eslint`)
- **Type Safety:** TypeScript & `vue-tsc`

---

## Architecture and Directory Structure

The repository is organized as a standard Nuxt module project with a local developer playground:

```
nuxtify-pages/
├── src/                      # Module source directory
│   ├── module.ts             # Main entrypoint defining default options and registering runtime files
│   ├── types.ts              # TypeScript interface definitions for options (extends @nuxtify/core options)
│   └── runtime/              # Runtime files injected into host Nuxt applications
│       ├── components/       # Packaged UI Components (e.g. EmailSubscribeForm, AppFooter, AppHeader)
│       ├── composables/      # Composables (e.g. useNuxtifyConfig)
│       ├── layouts/          # Layout templates (e.g. DefaultLayout.vue)
│       ├── pages/            # Page templates (e.g. DynamicSlug.vue)
│       └── utils/            # Shared utilities (e.g. submitFormData)
├── playground/               # Nuxt playground environment for testing and visual confirmation
│   ├── app.config.ts
│   ├── nuxt.config.ts
│   └── pages/                # Playground test pages
└── test/                     # Vitest test suite and end-to-end fixtures
    ├── basic.test.ts
    └── fixtures/
        └── basic/            # Nuxt test fixture configuration and index page
```

---

## Building and Running

The project includes standard scripts for development, testing, building, and publishing:

### 1. Local Development

Start the local sandbox playground with hot-reloading:

```bash
npm run dev
```

_(This command internally builds the module stubs/types via `dev:prepare` and launches `nuxt dev playground`)_

### 2. Testing

Run the test suite using Vitest:

```bash
npm run test
```

To run tests in interactive watch mode:

```bash
npm run test:watch
```

### 3. Type Checking

Perform strict TypeScript verification across both the module source and the playground:

```bash
npm run test:types
```

### 4. Code Quality & Linting

Verify stylistic rules, import ordering, and code standards:

```bash
npm run lint
```

Automatically fix lint errors:

```bash
npm run lint:fix
```

### 5. Production Build / Prepack

Build the distribution assets (found in `dist/`) in preparation for packaging or release:

```bash
npm run prepack
```

---

## Coding & Architectural Conventions

To maintain a cohesive and robust codebase, all modifications must adhere to these structural and stylistic rules:

### A. Nuxt Module Design Patterns

1. **Kit Utilities:** Always use standard `@nuxt/kit` methods for registering files and extending configurations. Avoid direct manipulation of the Nuxt config object.
   - Use `addComponentsDir()` for component registration.
   - Use `addImportsDir()` for auto-importing composables and utilities.
   - Use `addLayout()` for registering layouts.
   - Use `extendPages()` to define routes (e.g., dynamic routes like `/:slug`).
2. **Options and Defaults:** Always ensure new configuration options in `src/types.ts` are declared as optional and are assigned appropriate defaults in `src/module.ts`.
3. **AppConfig Syncing:** Expose options to the runtime via `nuxt.options.appConfig.nuxtify`. Retrieve them inside runtime code using the `useNuxtifyConfig` composable.

### B. Vue / Component Standards

1. **Composition API & SFC:** Write all components using the Single File Component format `<script setup lang="ts">`.
2. **Typescript Strictness:** NEVER use `any` or bypass type-checking (e.g. with `@ts-ignore`) unless absolutely unavoidable. Maintain strict typing for Vue props and emits.
3. **Use Direct Imports:** Because this is a Nuxt module, auto-imports do not work. All utilities, components, and composables must explicitly be imported from `#imports`.
4. **Vuetify Integration:** Leverage Vuetify components (`v-container`, `v-row`, `v-col`, `v-btn`, etc.) and typography styles (`text-h5`, etc.) rather than writing custom CSS, ensuring consistency with the `@nuxtify/core` theme system.

### C. Formatting and Code Styling

- **Flat ESLint Rules:** Strictly align with stylistic ESLint rules (semicolon exclusion where stylistic, single-quotes, trailing commas, proper importing spacing, clean order). Run `npm run lint` regularly to inspect alignment.
- **Import Order:** Maintain warning-free import organization (imports grouped and styled cleanly).

---

## Testing & Verification Standards

A task is not considered complete without thorough validation:

1. **Integration Testing:**
   - E2E testing is conducted using `@nuxt/test-utils/e2e` via Vitest.
   - If adding a feature or resolving a bug, create a representative test or modify `test/basic.test.ts` to assert correct behavior.
   - Keep fixtures in `test/fixtures/basic` simple and target-oriented.
2. **Type Checking:** Always run `npm run test:types` to ensure that neither the module itself nor the playground has type compilation errors.
3. **Manual Validation:** Start the playground server via `npm run dev` to verify visual layout, reactive behaviors, and runtime integration.
