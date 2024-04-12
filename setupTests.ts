import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
};

export default config;
