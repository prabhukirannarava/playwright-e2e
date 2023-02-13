import { Locator, Page } from '@playwright/test';
import { testConfig } from '../../config/test-config';
import { BasePage } from './base-page';

export class LandingPage extends BasePage {
  email: Locator = this.page.locator('[name="input-cta-email"]');
  languageSelectorBtn: Locator = this.page.getByRole('navigation', { name: 'Header' }).getByTestId('SwitcherButton');
  language: Locator = this.page.getByRole('navigation', { name: 'Header' }).getByTestId('item-'+testConfig.getLocale())
  signUpButton: Locator = this.page.getByTestId('button-with-input-cta').locator('div', { hasText: testConfig.getTranslation(testConfig.getLocale()).signup.signUpBtn });
  acceptCookiesBtn:Locator = this.page.locator('[id="onetrust-accept-btn-handler"]')

  constructor(page: Page) {
    super(page, {
      url: testConfig.getLocale()!='en'  ?
              testConfig.appBaseUrl()+'/'+testConfig.getLocale()+'/' :
                  testConfig.appBaseUrl(),
      title: testConfig.getTranslation(testConfig.getLocale()).landing.title,
    });
  }

  async acceptCookies() {
    if (await this.acceptCookiesBtn.isVisible()) {
      await this.acceptCookiesBtn.click();
    }
  }
  async enterEmail(email: string) {
    await this.email.fill(email);
  }

  async checkAndUpdateLocale() {
    await this.languageSelectorBtn.click();
    await this.language.click();
  }
}
