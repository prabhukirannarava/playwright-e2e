import { FullConfig } from '@playwright/test';
import * as dotenv from "dotenv";

const globalSetup = async (config: FullConfig) => {
  process.env.test_env ?
    dotenv.config({
      path: `.env.${process.env.test_env}`,
      override: true
    }) : dotenv.config({
      path: `.env.test`,
      override: true
    });
};
export default globalSetup;
