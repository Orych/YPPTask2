export default defineNuxtConfig({
  app: {
    baseURL: '/my-resume/' // замените на название вашего репозитория
  },

  // Добавляем режим статической генерации
  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2025-03-05'
})
