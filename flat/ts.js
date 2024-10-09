// Requires the optional peerDependencies be in place.
import { rules } from "../rules/ts.js";
import tslint from "typescript-eslint";

const ts = {
  files: ["**/*.ts"],
  ignores: [
    "**/node_modules/**",
    "**/*.d.ts",
  ],
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
      "no-unused-vars": "off",
      "one-var": "off",
      "no-use-before-define": "off",
      "init-declarations": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/prefer-function-type": "off",
    },
  },
];
