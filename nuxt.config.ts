import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  image: {
    domains: [
      'informburo.kz',
      'upload.wikimedia.org',
      'static.tildacdn.pro',
    ],
  },
});