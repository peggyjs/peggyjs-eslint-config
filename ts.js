import { rules } from "./rules/ts.js";
import tslint from "typescript-eslint";

const ts = {
  files: ["**/*.ts"],
  ...tslint.configs.base,
  rules,
};

ts.languageOptions.parserOptions = {
  // It's undefined for now, but just in case.
  ...ts.languageOptions.parserOptions,
  project: true,
};

export default [
  ts,
  {
    files: ["**/*.d.ts"],
    rules: {
      // Easier than fixing the hand-generated peg.d.ts
      "init-declarations": "off",
      "no-unused-vars": "off",
      "no-use-before-define": "off",
      "one-var": "off",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/prefer-function-type": "off",
    },
  },
];
