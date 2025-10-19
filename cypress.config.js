const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/json',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://lpexpress.lt/",
    viewportWidth: 1320,
    viewportHeight: 1000,
    defaultCommandTimeout: 8000,
    retries: {
      runMode: 1,
      openMode: 1,
    },
    specPattern: [
      'cypress/e2e/track.cy.js',
      'cypress/e2e/send.cy.js',
      'cypress/e2e/map.cy.js',
    ],
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
