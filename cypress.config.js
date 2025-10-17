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
      runMode: 2,
      openMode: 2,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
