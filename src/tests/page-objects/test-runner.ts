import { test as baseTest } from '@playwright/test';
import { SignUpPage } from "./pages/sign-up-page";
import { LandingPage } from "./pages/landing-page";
import { ConfirmationPage } from "./pages/confirmation-page";

export const test = baseTest.extend<{
  landingPage: LandingPage;
  signUpPage: SignUpPage;
  confirmationPage: ConfirmationPage;
}>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page));
  },
  confirmationPage: async ({ page }, use) => {
    await use(new ConfirmationPage(page));
  },
});

