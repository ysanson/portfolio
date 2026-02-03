// https://nuxt.com/docs/api/configuration/nuxt-config
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
    head: {
      title: "Yvan SANSON",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
