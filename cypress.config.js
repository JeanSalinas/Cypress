const { defineConfig } = require("cypress");
require('dotenv').config()
module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      config.env.username = process.env.CYPRESS_username
      config.env.password = process.env.CYPRESS_password
      config.env.validUsername = process.env.CYPRESS_validUsername
      config.env.validPassword = process.env.CYPRESS_validPassword
      config.env.invalidUsername = process.env.CYPRESS_invalidUsername
      config.env.invalidPassword = process.env.CYPRESS_invalidPassword
      return config
      // implement node event listeners here
    },
  },
});
