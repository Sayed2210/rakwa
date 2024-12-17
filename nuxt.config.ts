// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: 'https://doma.zaidia.net/api', // Public base URL
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    layoutTransition: {
      name: "fade",
      mode: "out-in", // default
    },
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxtjs/i18n",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
  image: {
    format: ["webp"],
    dir: "assets/images",
  },
  css: ["~/assets/styles/main.min.css"],
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
        dir: "ltr",
      },
      {
        code: "ar",
        language: "ar-SA",
        dir: "rtl",
      },
    ],
    defaultDirection: "auto",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
  },
});
