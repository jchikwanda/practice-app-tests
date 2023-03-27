const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  use: {
    headless: false,
    video: "on",
    screenshot: "on",
  },
  reporter: [["html", { open: "never" }]]
})

module.exports = config;