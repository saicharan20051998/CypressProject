// generate-html-report.js
const fs = require('fs');
const cucumberHtmlReporter = require('cucumber-html-reporter');

const jsonReportFile = 'combined-report.json'; // Specify the path to your merged JSON report file
const htmlReportFile = 'combined-report.html'; // Specify the desired output HTML file name

const options = {
    theme: 'bootstrap',
    jsonFile: jsonReportFile,
    output: htmlReportFile,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'App Version': '1.0.0',
        'Test Environment': 'Production',
        // Add more metadata if needed
    },
};

cucumberHtmlReporter.generate(options, () => {
    console.log(`HTML report generated: ${htmlReportFile}`);
});
