const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl:  'https://test-learn.ada-school.org/',
  }
})