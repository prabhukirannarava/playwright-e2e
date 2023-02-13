# Miro-E2E Test Automation using playwright
This repository contains the end-2-end automation framework for Miro's web application. The framework contains different directories whose purpose is explained in 
below sections. Framework has capability to run against multiple environments, in the locale of user's choice.

### Technologies/Tools used 
* Nodejs
* Typescript
* Playwright
* Gitlab VCS
* Webstorm IDE

### Project Setup:

Project contains the below set of folders:

`miro-e2e-tests/src/tests/`

     directories
     - config             (Directory where all the test config are processed )
	 - data               (Directory with all the necesseary test data for multiple environments )	
     - localization       (Directory with all necessary translation texts used for validation)
     - page-objects       (Directory with all the page objects of the application under test)
     - specs              (Directory wth all the tests & is the place where execution starts)
     - utils              (Directory to maintain the pre and post processing   )  

`miro-e2e-tests`

	- .env.dev  (Contains dev environment details such as base url and time out values)
	- .env.test (Contains test environment details such as base url and time out values)
	- .env.prod (Contains prod environment details such as base url and time out values)

`miro-e2e-tests/playwright-report` 

    - It contains all the reporting related filed including index.html.

`package.json`

	- It contains the external dependencies and scripts which are needed to run/build the project.

`playwright.config.ts`

    - It contains all the external properties such as browser, implicit timeouts, decision about 
	  when to take screenshots, Details needed in the report.


### Test Reports Location after the test run completion :
	- playwright-e2e-tests/playwright-report/index.html.

### Automation Test details :

This automation test suite will use playwright test runner in order to describe test scenarios and execute the tests. 
After the test run, the framework will generate a test report along with screenshots, videos of the test. The report will show the summary of all executed tests.
screenshots, videos are captured only for failed scenarios. In this project, chrome and firefox browser has been used for testing the application. we can configure browser of our choice(in "playwright.config.ts").
The user can pass the environment and locale as command line argument. Framework is designed to work across multiple env and in english and dutch locale. With the available time, 
automated sign up flow. Two different scenarios are covered.
1. Happy flow - sign up.
2. Input validations in sign up flow.

### How to execute this project :

1. NodeJS is required for this project, you can find installation instructions [here](https://nodejs.org/en/).
2. Clone this repository:
```sh
git clone https://github.com/prabhukirannarava/playwright-e2e-tests.git
```
3. Go to the repository directory in the Terminal/Command line and run the following command to install dependencies:
```sh
npm i
```
4. Run the following command to trigger the test run.
```sh
npm run env:prod
```
Note: Please check the package.json, scripts section to run tests against env of your choice.

5. After the test run is finished, open test report in location.
     - playwright-e2e-tests/playwright-report/index.html.

### Who do I talk to? ###
Please reach out to me at prabhukiran.narava@gmail.com in case of questions and clarifications related to above set up.
