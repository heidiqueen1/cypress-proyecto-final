module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://test-learn.ada-school.org/',
    experimentalSessionAndOrigin: true,
    excludeSpecPattern: process.env.CI ? 'cypress/e2e/all.cy.js' : [],
  },
});