// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(process.env.TAURI_DEV_HOST)
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  devServer: { host: '0.0.0.0' || 'localhost' },
  hooks: {
    'vite:extend': function ({ config }) {
      if (config.server && config.server.hmr && config.server.hmr !== true) {
        config.server.hmr.protocol = 'ws'
        config.server.hmr.host = '192.168.1.9'
        config.server.hmr.port = 3000
      }
    },
    // 'vite:extendConfig': (config) => {
    //   if (config.server) {
    //     config.server.hmr.port = 3000
    //   }
    // },
  },
  vite: {
    // Better support for Tauri CLI output
    clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
    },
  },
  // nitro: {
  //   debug: true,
  // },
})
