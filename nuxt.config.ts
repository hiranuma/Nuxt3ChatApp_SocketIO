// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      socketPort: 3001,
      url: 'http://localhost'
    }
  },
  modules: ['@nuxt/ui']
})
