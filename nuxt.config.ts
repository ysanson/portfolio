// https://nuxt.com/docs/api/configuration/nuxt-config
// Set by the GitHub Pages workflow to the repo's Pages path (e.g. "/portfolio/"),
// or "" once a custom domain is configured. Defaults to "/" for local dev.
const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/a11y",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    [
      "@nuxt/fonts",
      {
        families: [
          {
            name: "Inter",
            provider: "google",
          },
        ],
      },
    ],
  ],
  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US", file: "en.json" },
      { code: "fr", name: "Français", language: "fr-FR", file: "fr.json" },
      { code: "ja", name: "日本語", language: "ja-JP", file: "ja.json" },
    ],
    defaultLocale: "en",
  },
  app: {
    baseURL,
    head: {
      title: "Yvan SANSON",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: `${baseURL}favicon.ico` },
      ],
    },
  },
});
