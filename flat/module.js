"use strict";

const globals = require("globals");
const { rules } = require("../rules/js.js");

module.exports = {
  files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.ts"],
  plugins: {
    "@stylistic": require("@stylistic/eslint-plugin"),
  },
  languageOptions: {
    globals: globals["shared-node-browser"],
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules,
};
