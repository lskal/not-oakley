// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: ["~/assets/css/main.scss"],

  modules: ["@nuxt/image"],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          href: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "not-oakley-nuxt-ecommerce",
        },
      ],
    },
  },
});
