"use strict";

// Requires the optional peerDependencies be in place.
const tslint = require("typescript-eslint");
const { rules } = require("../rules/ts.js");

module.exports = {
  files: ["**/*.ts"],
  ignores: [
    "**/node_modules/**",
    "**/*.d.ts",
  ],
  ...tslint.configs.base,
  rules,
};

module.exports.languageOptions.parserOptions = {
  // It's undefined for now, but just in case.
  ...module.exports.languageOptions.parserOptions,
  project: true,
};
