const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  use: {
    headless: false
  },
  reporter: [["html"]]
})

module.exports = config;