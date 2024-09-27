const reporter = require('multiple-cucumber-html-reporter');

const options = {
jsonDir: 'cypress/cucumber-json',
reportPath: 'cypress/cucumber-reports',
reportName: 'Cucumber Test Report',
metadata: {
browser: {
name: 'Edge',
version: 'Latest'
},
device: 'Local test machine',
platform: {
name: 'Windows',
version: '11'
}
}
};

reporter.generate(options);