const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // nível global
  e2e: {
    baseUrl: "https://automationteststore.com/",
    specPattern: "**/*.{cy,spec}.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
