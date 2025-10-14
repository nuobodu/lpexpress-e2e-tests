const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "baseUrl": "https://lpexpress.lt/",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
