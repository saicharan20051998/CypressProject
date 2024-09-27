# How to Clone the Project

To clone the project, use the following command:

```bash
git clone https://github.com/saicharan20051998/CypressProject.git
```

## Importing the Project

After cloning, import the project into Visual Studio Code.

## Installing Dependencies

Open the terminal and run the following command:

```bash
npm install
```

This will download all the dependencies listed in the `package.json` file.

## Framework Used

The framework used for this project is **Cucumber**, along with **Cypress**, which uses **Chai** and **Mocha** for assertions and test structure. The project automates the **Amazon** website.

## Running Tests

### Cypress Test Runner

Cypress has a separate test runner. To open it through the terminal, use the command:

```bash
npx cypress open
```

A test runner will open. Now select any browser and click on the feature file to run your tests.

### Running Tests in Terminal

If you want to run the scripts in the terminal, use the command:

```bash
npm run test
```

### Recording Your Test Run

To record your test run, use:

```bash
npm run test:record
```

## Reporting

I have used the `cucumber` and `cypress-cucumber-preprocessor` dependencies for reporting. After execution, run the following commands to generate reports:

```bash
node cucumber-reports.js
node generate-html-report.js
```
