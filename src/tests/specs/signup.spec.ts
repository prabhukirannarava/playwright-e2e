import { expect } from '@playwright/test';
import { test } from '../page-objects/test-runner';
import { testConfig } from "../config/test-config";
import randomEmail from "random-email";

test.describe('validate happy flow - signUp @smoke', () => {
  let userData;

  test.beforeAll(async () => {
     userData = testConfig.initUserData();
  });

  test.beforeEach(async ({ page, landingPage, }) => {
    await test.step('Open landing page & fill in email', async() =>{
      await landingPage.open();
      await landingPage.acceptCookies();
      await landingPage.checkAndUpdateLocale();
      await expect(page).toHaveURL(landingPage.url);
      await expect(page).toHaveTitle(landingPage.title);
      await landingPage.enterEmail(randomEmail({ domain: 'narava.com' }));
      await landingPage.signUpButton.click();
    });
  });


  test('Validate login flow', async ({
    page,
    signUpPage,
    confirmationPage,
  }) => {
      await test.step('Validate sign up page and fill in user name & Pwd', async() =>{
      await expect(page).toHaveURL(new RegExp('^'+signUpPage.url) );
      await expect(page).toHaveTitle(signUpPage.title);
      await signUpPage.enterUserName(userData.name);
      await signUpPage.continueBtnStepTwo.click();
      await signUpPage.enterPassword(userData.password);
      await signUpPage.termsCheckBox.click();
      await signUpPage.continueBtnStepThree.click();
    });

      await test.step('Validate confirmation page', async() =>{
      await expect(page).toHaveURL(confirmationPage.url);
      await expect(page).toHaveTitle(confirmationPage.title);
      await confirmationPage.confirmationText.isVisible();
      await confirmationPage.confirmationCode.isVisible()
    })

  });


  test('Validate Input Validations On No Pwd', async ({
    signUpPage
  }) => {
      await test.step('Validate sign up page and fill in user name & Pwd', async() =>{
      await signUpPage.enterUserName(userData.name);
      await signUpPage.continueBtnStepTwo.click();
      await signUpPage.continueBtnStepThree.click();
      await signUpPage.validatePwdInputValErr();
      await signUpPage.validateTermsErr();
    });
  });

});
