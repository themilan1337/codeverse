import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: false,
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@pinia/nuxt'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
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