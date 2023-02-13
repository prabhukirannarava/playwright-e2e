import { Locator, Page } from '@playwright/test';
import { testConfig } from '../../config/test-config';
import { BasePage } from './base-page';

export class ConfirmationPage extends BasePage {
  confirmationText: Locator = this.page.locator('[class="signup__subtitle-form"]');
  confirmationCode: Locator = this.page.locator('#code');

  constructor(page: Page) {
    super(page, {
      url: testConfig.getLocale()!='en'  ?
                testConfig.baseUrl +'/'+testConfig.getLocale()+ '/email-confirm/' :
                    testConfig.baseUrl+'/email-confirm/',
      title: testConfig.getTranslation(testConfig.getLocale()).confirmation.title
    });
  }

}
