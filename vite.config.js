// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'qa/quality-assurance.html'),
        security: resolve(__dirname, 'security/security.html'),
        bad: resolve(__dirname, 'bad/bad-example.html')
      }
    }
  }
}