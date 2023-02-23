# Auroraklinikken.no

This repo contains the source for auroraklinikken.no

It showcases:
- SvelteKit
- Sanity
    - Typesafety with `sanity-typed-schema-builder`
    - Translation on field and document level
    - Single project setup
- i18n typesafety with `typesafe-i18n`

## Develop

Run `pnpm i` and `pnpm dev` to start the dev server.

## Build

Run `pnpm i` and `pnpm build` to build the production build.

## Deploy

The site is deployed with vercel, every push to `master` is exposed in production, and every push to `develop` is exposed in preview environments.