"use strict";

const globals = require("globals");

module.exports = {
  files: ["test/**"],
  languageOptions: {
    globals: globals.mocha,
  },
};
