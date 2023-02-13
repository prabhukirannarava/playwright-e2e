import { Locator, Page } from '@playwright/test';

export abstract class BasePage {

  url: string;
  title: string;

  protected constructor(
    protected page: Page,
    options?: Partial<{ url: string; title: string }>,
  ) {
    this.url = options?.url;
    this.title = options?.title;
  }

  async open() {
    await this.page.goto(this.url);
  }

  $(selector: string): Locator {
    return this.page.locator(selector);
  }

}
