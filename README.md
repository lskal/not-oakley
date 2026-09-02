# Nuxt Training Ecommerce Project

### This is a training project to improve my skills in Nuxt 4 (current) and Vue 3 (current). Is not meant to be a rip off of the Oakley website, is just using it as a base to learn, please don't sue me ✌️

## What is this

A small e-commerce front-end built to practice Nuxt 4 / Vue 3: category browsing, a product listing page, product detail pages, and a favourites page. Product data is served from `server/api` routes backed by Vercel Blob (`initialDB.json`), with a local JSON fallback for dev (`server/data/initialDB.fallback.json`).

## Deploy URL

[deploy link using vercel](https://nuxt-training-ecommerce-project.vercel.app/)

---

## Links

- [nuxt 4 structure](https://nuxt.com/docs/4.x/directory-structure)

- [nuxt 4 examples](http://nuxt.com/docs/4.x/examples)

- [nuxt 4 modules](https://nuxt.com/modules)

---

## Useful CLI Lines

## Delete and full install

`rm -rf node_modules .nuxt .output .nitro .data .cache dist logs`
`npm i`
`npm run dev`

## Vercel dev

### You use vercel dev only when:

- Testing environment variable injection

- Testing serverless behavior

- Debugging something that behaves differently on Vercel

For everyday development:

`npm run dev`

For production-like testing:

`vercel dev`

---

## Iconify

`import { Icon } from "@iconify/vue";`

`<Icon icon="mdi-light:home" />`

find the perfect icon by checking out the [iconify catalog page](https://icon-sets.iconify.design/)

---

## SCSS

[nuxt 4 scss docs](https://nuxt.com/docs/4.x/getting-started/styling#using-preprocessors)

---

## Possible Future Install Packages

- i18n
- sitemap
- supabase --> for now there is no cart or account pages, if i decide in future to add this feature gonna have to include supabase with roles, admin and this stuff
- pinia
- tailwind
- content
- eslint / eslint-module

---

## Setup NPM/PNPM

Make sure to install dependencies:

### npm install

`npm install`

### Development Server

Start the development server on `http://localhost:3000`:

`npm run dev`

### Production

Build the application for production:

### npm run build

`npm run build`

Update values in vercel blob:

### npm run blob:upload

`npm run blob:upload`

Locally preview production build:

### npm run preview

`npm run preview`

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## Environment Variables

- `BLOB_READ_WRITE_TOKEN` — required to run `npm run blob:upload` and to fetch product data from Vercel Blob in production. Without it locally, the app falls back to the local JSON fallback file for dev.
