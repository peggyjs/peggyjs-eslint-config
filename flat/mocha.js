"use strict";

const globals = require("globals");
const mocha = require("eslint-plugin-mocha");

module.exports = {
  files: ["test/**"],
  languageOptions: {
    globals: globals.mocha,
  },
  plugins: {
    mocha,
  },
  rules: {
    ...mocha.configs.recommended.rules,
    "mocha/no-mocha-arrows": "off",
  },
};
