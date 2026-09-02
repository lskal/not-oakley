# Nuxt Training Ecommerce Project

### This is a training project to improve my skills in Nuxt 4 (current) and Vue 3 (current). Is not meant to be a rip off of the Oakley website, is just using it as a base to learn, please don't sue me ✌️

## What is this

A small e-commerce front-end built to practice Nuxt 4 / Vue 3: category browsing, a product listing page, product detail pages, a favourites page, product search, and a mock checkout backed by a real (if lightweight) cart. Product data is served from `server/api` routes backed by Vercel Blob (`initialDB.json`), with a local JSON fallback for dev (`server/data/initialDB.fallback.json`).

---

## Pages

- `/` — homepage
- `/category/[category]` — product listing page (PLP) for a category (sunglasses, prescription, apparel, ...)
- `/products/[slug]` — product detail page (PDP), with an "Add to cart" that opens the cart drawer
- `/favourites` — wishlist page
- `/search` — full search results page, reached via the search drawer's "Show all results"
- `/checkout` — mock checkout: reads the current cart, shows a static shipping/payment form, "Place order" clears the cart and shows a mock confirmation (no real order processing)

There are also two header-level drawers (not routes): a search drawer with live autosuggest, and a cart drawer showing the current cart's items/quantities/subtotal — both follow the same `SideDrawer` component pattern.

---

## Technical Choices

- **Routing**: plain Nuxt file-based routing (`app/pages/`) — no router config needed; dynamic segments like `[category]` and `[slug]` map straight to route params. Chosen because it's Nuxt's default and keeps the project focused on learning Nuxt/Vue itself rather than routing setup.
- **Data**: `server/api/*` Nitro routes (colocated backend, no separate server needed) paired with `useFetch`/`useAsyncData` for SSR-friendly fetching.
- **Cart / shared state**: a small `useCart()` composable (`app/composables/useCart.ts`) wrapping Nuxt's built-in `useState()`, instead of Pinia. `useState()` gives the same shared, SSR-safe reactive state across components (cart items, cart-drawer open state) without adding a dependency — enough for this app's needs. If the app's state grows beyond a cart (e.g. auth, multi-step checkout), Pinia is still the natural next step (see "Possible Future Install Packages" below).

---

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

`app/assets/css/main.scss` manages the general styling: base/reset rules and the `:root` design tokens (colors, spacing, typography, etc.) used across components.

[nuxt 4 scss docs](https://nuxt.com/docs/4.x/getting-started/styling#using-preprocessors)

---

## Possible Future Install Packages

- i18n
- sitemap
- supabase --> for now there are no account/auth pages (there is a cart now, see "Technical Choices"), if i decide in future to add accounts gonna have to include supabase with roles, admin and this stuff
- pinia
- tailwind
- content
- eslint / eslint-module

---

## Node Version

This project uses a `.nvmrc` file to pin the Node version. If you use nvm, run `nvm use` in the project root to switch to the correct version automatically.

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
