<<<<<<< HEAD
import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config';

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  /**
   *Maximum time one test can run for.
   */
  timeout: (Number(process.env.TIMEOUT) || 120) * 1000,
  testDir: './src/tests/specs/',
  retries: 0,
  outputDir: process.env.OUTPUT_DIR || './test-output',
  forbidOnly: !!process.env.CI,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: (Number(process.env.EXPECT_TIMEOUT) || 5) * 1000,
  },
  reporter: [['list'], ['html'], ['./src/tests/utils/my-awesome-reporter.ts']],
  globalSetup: require.resolve(__dirname + '/src/tests/utils/global-setup.ts'),
  use: {
    trace: 'retain-on-failure',
    baseURL:  process.env.BASE_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    contextOptions: {
      ignoreHTTPSErrors: true,
      acceptDownloads: true,
    },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        launchOptions: {
          chromiumSandbox: false,
          // devtools: process.env.DEBUG?.toLowerCase() === 'true',
          args: [
            // List of Chrome arguments: http://peter.sh/experiments/chromium-command-line-switches/
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          ],
        },
        viewport: {
          width: Number(process.env.SCREEN_WIDTH) || 1792,
          height: Number(process.env.SCREEN_HEIGHT) || 985,
        },
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
        launchOptions: {
          args: [
            '-purgecaches',
          ],
          firefoxUserPrefs: {
            'browser.helperApps.neverAsk.saveToDisk': 'application/octet-stream',
          },
        },
        viewport: {
          width: Number(process.env.SCREEN_WIDTH) || 1792,
          height: Number(process.env.SCREEN_HEIGHT) || 985,
        },
      }
    }
  ],
};
export default config;
=======
import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config';

// Reference: https://playwright.dev/docs/test-configuration
const config: PlaywrightTestConfig = {
  /**
   *Maximum time one test can run for.
   */
  timeout: (Number(process.env.TIMEOUT) || 120) * 1000,
  testDir: './src/tests/specs/',
  retries: 0,
  outputDir: process.env.OUTPUT_DIR || './test-output',
  forbidOnly: !!process.env.CI,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: (Number(process.env.EXPECT_TIMEOUT) || 5) * 1000,
  },
  reporter: [['list'], ['html'], ['./src/tests/utils/my-awesome-reporter.ts']],
  globalSetup: require.resolve(__dirname + '/src/tests/utils/global-setup.ts'),
  use: {
    trace: 'retain-on-failure',
    baseURL:  process.env.BASE_URL,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    contextOptions: {
      ignoreHTTPSErrors: true,
      acceptDownloads: true,
    },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        launchOptions: {
          chromiumSandbox: false,
          // devtools: process.env.DEBUG?.toLowerCase() === 'true',
          args: [
            // List of Chrome arguments: http://peter.sh/experiments/chromium-command-line-switches/
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
          ],
        },
        viewport: {
          width: Number(process.env.SCREEN_WIDTH) || 1792,
          height: Number(process.env.SCREEN_HEIGHT) || 985,
        },
      },
    },
    {
      name: 'Desktop Firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
        launchOptions: {
          args: [
            '-purgecaches',
          ],
          firefoxUserPrefs: {
            'browser.helperApps.neverAsk.saveToDisk': 'application/octet-stream',
          },
        },
        viewport: {
          width: Number(process.env.SCREEN_WIDTH) || 1792,
          height: Number(process.env.SCREEN_HEIGHT) || 985,
        },
      }
    }
  ],
};
export default config;
>>>>>>> 21c9031676df56bb923d662d25e45cab868c67a2
