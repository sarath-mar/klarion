// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [
    "~/plugins/constants.js",
    "~/plugins/mixins.js"
  ],
  telemetry: {
    enabled: true,
    consent: 1,
  },
  modules: ["nuxt-icon"],
  css: ["vuetify/lib/styles/main.css", "~/utils/global.css"],
  build: {
    transpile: ["vuetify"],
  },
})
