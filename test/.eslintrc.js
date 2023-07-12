"use strict";

module.exports = {
  root: true,
  extends: ["@peggyjs", "@peggyjs/eslint-config/typescript"],
  parserOptions: {
    project: "test/tsconfig.json",
  },
};
