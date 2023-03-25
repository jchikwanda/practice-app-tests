# Practice Manager Automated Testing Project

This project is intended to perform automated testing on the Practice Manager application. The tests will cover five main sections of the application, focusing on creating, reading, searching, updating, and deleting data on Syncfusion datagrids.

## Technologies Used

The following technologies are used in this project:

- `Playwright` - a Node.js library for browser automation testing
- `dotenv` - a zero-dependency module that loads environment variables from a .env file
- `Git` - a version control system for managing source code
- `npm` - a package manager for Node.js.
- `Visual Studio Code` - an integrated development environment (IDE).

## Installation

To install and run this project, follow these steps:

1. Clone the repository to your local machine using the command:

```bash
git clone https://github.com/jchikwanda/practice-app-tests.git
```

2. Navigate to the project directory:

```bash
cd practice-manager
```

3. Install the project dependencies:

```bash
npm install
```

4. Replace `playwright.config.js` with the following code;

```js
const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  use: {
    headless: false
  },
  reporter: [["html"]]
})

module.exports = config;
```

**Note** this will be updated as per the needs.

4. Set the necessary environment variables

The following environment variables need to be set in the ```.env``` file before running the tests:

- `APPURL`: The URL of the Practice Manager application.
- `EMAIL`: The email address to use for logging in.
- `PASSWORD`: The password to use for logging in.

Here is a sample;

```js
//.env
APPURL=https://myapp.com
EMAIL=myemail@gmail.com
PASSWORD=1234
```

4. Run the tests using one of the available scripts in package.json. For example, to run all the tests:

```js
npm run test:all
```

## Sections to be tested

1. Case Management
    - Agenda
    - Tasks
    - Case Dashboard
        - Events
        - Tasks
        - Documents
        - Time Entries
        - Expenses
        - Invoices
        - Payments
        - Contacts
        - Updates
        - Requirements
    - Reports
2. Intake
    - Leads
    - Lead Analytics
3. Tools
    - Date Calculator
    - Probation Calculator
    - Settlement Calculator
    - Statute Search
    - Warrant Search
    - Analytics
    - System Admin
4. Staff
    - My Timesheets
    - My Reimbursements
    - My Time-Off Requests
    - My Performance Incentives
    - Staff Directory
5. Finance
    - Checks
    - Payments
    - Master Ledger
    - Bank Accounts
    - Performance Incentives
    - Time Off Requests
    - Reimbursement Requests
    - Timesheets
    - Payrolls

## Running the tests

Let's learn how to run the test scripts.

`npm run <script name>` e.g. `npm run test:case-manangement`

## Scripts

The following scripts are available:

```js
{
  "scripts": {
    "test:case-management": "npx playwright test tests/case-management/*.test.js",
    "test:intake": "npx playwright test tests/intake/*.test.js",
    "test:tools": "npx playwright test tests/tools/*.test.js",
    "test:staff": "npx playwright test tests/staff/*.test.js",
    "test:finance": "npx playwright test tests/finance/*.test.js",
    "test:all": "npx playwright test tests/**/*.test.js",
    "report:create": "npx playwright test --reporter=html",
    "report:open": "npx playwright show-report",
    "test:debug": "npx playwright test --debug",
    "test:headful": "npx playwright test --headed",
    "test:parallel": "npx playwright test --workers=3"
  }
}
```

**Summary on the scripts**

- `test:case-management`: runs tests in the `tests/case-management` directory, which includes tests for Agenda, Tasks, Case Dashboard and Reports.
- `test:intake`: runs tests in the `tests/intake` directory, which includes tests for Leads and Lead Analytics.
- `test:tools`: runs tests in the `tests/tools` directory, which includes tests for Date Calculator, Probation Calculator, Settlement Calculator, Statute Search, Warrant Search, Analytics, and System Admin.
- `test:staff`: runs tests in the `tests/staff` directory, which includes tests for My Timesheets, My Reimbursements, My Time-Off Requests, My Performance Incentives, and Staff Directory.
- `test:finance`: runs tests in the `tests/finance` directory, which includes tests for Checks, Payments, Master Ledger, Bank Accounts, Performance Incentives, Time Off Requests, Reimbursement Requests, Payrolls.
- `test:all`: runs all the test files in the `tests` directory and its subdirectories.
- `report:open`: Opens an html report that has been created by the `report:create` command.
- `report:create`: Creates an html report of tests.
- `test:debug`: This script runs the tests in debug mode, which allows you to pause and step through your tests using the built-in debugger. To use this script, you would run npm run `test:debug` in your terminal.

- `test:headful`: This script runs the tests in headed mode, which means that the browser window is visible and you can watch the tests as they run. This is useful for debugging and troubleshooting. To use this script, you would run npm run `test:headful` in your terminal.

- `test:parallel`: This script runs the tests in parallel using 3 workers, which can significantly speed up the test execution time. This is useful when you have a large number of tests and you want to run them more quickly. To use this script, you would run npm run `test:parallel` in your terminal.

## Conclusion

This project aims to automate testing for the Practice Manager application. By thoroughly testing all the major sections of the application, we can ensure that it works as expected and catches any bugs or errors before they become a problem.

