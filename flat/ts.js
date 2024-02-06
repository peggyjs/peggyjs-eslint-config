"use strict";

// Requires the optional peerDependencies be in place.
const { rules } = require("../rules/ts.js");

module.exports = {
  files: ["**/*.ts"],
  languageOptions: {
    parser: require("@typescript-eslint/parser"),
    parserOptions: {
      project: true,
    },
    sourceType: "module",
  },
  plugins: {
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
  },
  rules,
};
