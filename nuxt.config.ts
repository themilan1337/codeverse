import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/seo', '@pinia/nuxt'],

  site: {
    url: 'https://ontustik.com',
    name: 'Visit Shymkent',
    description: 'Discover the ancient soul of Kazakhstan. Explore Shymkent\'s rich history, vibrant culture, and breathtaking attractions.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en'
      }
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
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    public: {
      siteUrl: 'https://ontustik.com',
    }
  },
});