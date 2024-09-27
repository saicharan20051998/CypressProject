// merge-reports.js
const fs = require('fs');
const path = require('path');

const reportsDirectory = 'cypress/cucumber-json'; // Specify the directory containing the reports
const outputFileName = 'combined-report.json'; // Specify the desired output file name

// Read the directory and retrieve the list of JSON files
fs.readdir(reportsDirectory, (err, files) => {
    if (err) {
        console.error(`Failed to read directory: ${reportsDirectory}`);
        return;
    }

    const jsonFiles = files.filter(file => path.extname(file) === '.json');

    if (jsonFiles.length === 0) {
        console.log('No JSON files found in the directory.');
        return;
    }

    const mergedReports = jsonFiles.reduce((mergedData, file) => {
        const reportData = JSON.parse(fs.readFileSync(path.join(reportsDirectory, file)));
        return mergedData.concat(reportData);
    }, []);

    fs.writeFileSync(outputFileName, JSON.stringify(mergedReports));
    console.log(`Successfully merged ${jsonFiles.length} JSON reports into ${outputFileName}.`);
});
