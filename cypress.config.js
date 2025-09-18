const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // nível global
  e2e: {
    baseUrl: "https://automationteststore.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.{cy,spec}.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
