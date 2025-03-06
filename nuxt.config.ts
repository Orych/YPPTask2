export default defineNuxtConfig({
  app: {
    baseURL: '/my-resume/'
  },

  // Добавляем режим статической генерации
  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2025-03-05'
})
