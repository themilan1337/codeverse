import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/seo', '@pinia/nuxt'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
    }
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