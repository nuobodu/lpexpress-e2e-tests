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
    "baseUrl": "https://lpexpress.lt/",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
