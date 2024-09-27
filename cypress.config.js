const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    projectId: 'm15dn2',
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
