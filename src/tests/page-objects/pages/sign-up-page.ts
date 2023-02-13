import { expect, Locator, Page } from "@playwright/test";
import { testConfig } from '../../config/test-config';
import { BasePage } from './base-page';

export class SignUpPage extends BasePage {

  userName: Locator = this.page.locator('#name');
  password: Locator = this.page.locator('#password');
  continueBtnStepTwo: Locator = this.page.locator('button[class="signup__submit"]:below(input[id="name"])');
  continueBtnStepThree: Locator = this.page.locator('button[class="signup__submit"]:near(div[class="signup__checkbox-wrap"])');
  termsCheckBox : Locator = this.page.locator('[class="mr-checkbox-1__check "]');
  termsError: Locator = this.page.locator('#termsError');
  passwordInputValError: Locator = this.page.locator('div[data-testid="please-enter-your-password-1"]');

  constructor(page: Page) {
    super(page, {
      url: testConfig.getLocale()!='en'  ?
               testConfig.baseUrl+'/'+testConfig.getLocale() + '/signup/' :
                   testConfig.baseUrl+ '/signup/' ,
      title: testConfig.getTranslation(testConfig.getLocale()).signup.title
    });
  }

  async enterUserName(uname: string) {
    await this.userName.fill(uname);
  }

  async enterPassword(pwd: string) {
    await this.password.fill(pwd);
  }

  async validatePwdInputValErr() {
    await expect(this.passwordInputValError).toHaveText(testConfig.getTranslation(testConfig.getLocale()).signup.noPwdErr);
  }

  async validateTermsErr() {
    await expect(this.termsError).toHaveText(testConfig.getTranslation(testConfig.getLocale()).signup.noTermsErr);
  }



}
