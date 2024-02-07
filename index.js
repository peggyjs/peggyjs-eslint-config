"use strict";
const { rules } = require("./rules/js");

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["@stylistic"],
  rules,
};
