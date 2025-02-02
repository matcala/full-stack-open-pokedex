const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    pageLoadTimeout: 100000
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
