const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://cars.vueling.com",
    "defaultCommandTimeout": 10000,
      "viewportWidth": 430,
      "viewportHeight": 932,   
  },
});
