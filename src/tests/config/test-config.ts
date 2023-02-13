import { miroEnglishTranslation } from '../localization/miro-translations-en';
import { miroDutchTranslation } from '../localization/miro-translations-nl';
import { User } from '../data/data-types/user';
import config from '../../../playwright.config';
import { devUser } from '../data/data-dev';
import { testUser } from '../data/data-test';
import { prodUser } from '../data/data-prod';


type Localizations = 'en' | 'nl';
type Environment =  'dev' | 'test' | 'prod';



export class TestConfig {

  baseUrl: string = config.use.baseURL;

  env : string = 'test';

  locale: string = 'en';

  envUserData : User = this.getEnvUserData('test');

  appBaseUrl() {
    return this.baseUrl;
  }

  getEnv() : Environment {
    const env = process.env.test_env;
    return  env === 'dev' || env === 'test' || env === 'prod' ? env : 'prod';
  }

  getEnvUserData(env: Environment) {
    switch (env) {
      case 'dev':
        return devUser;
      case 'test':
        return testUser;
      case 'prod':
        return  prodUser;
      default:
        throw `Unknown Environment ${env}`;
    }
  }

  getLocale(): Localizations {
    const locale = process.env.Locale;
    return locale === 'en' || locale === 'nl' ? locale : 'en';
  }

  getTranslation(language: Localizations) {
    switch (language) {
      case 'en':
        return miroEnglishTranslation;
      case 'nl':
        return miroDutchTranslation;
      default:
        throw `Unknown locale ${language}`;
    }
  }

  initUserData(options: Partial<{ env: Environment }> =
    { env: this.getEnv() }) {
    if (options.env) {
      this.envUserData = this.getEnvUserData(options.env);
      this.env = options.env;
      return this.envUserData;
    }
  }

}
export const testConfig = new TestConfig();
