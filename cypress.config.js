const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: "https://automationteststore.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.{cy,spec}.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (
          browser.name === "chrome" ||
          browser.name === "chromium" ||
          browser.name === "electron"
        ) {
          launchOptions.args.push("--disable-gpu");
          launchOptions.args.push("--disable-software-rasterizer");
        }
        return launchOptions;
      });

      return config;
    },
  },
});
