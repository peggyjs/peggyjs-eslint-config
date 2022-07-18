"use strict";

module.exports = {
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "./ts.js",
      ],
    },
    {
      files: ["*.d.ts"],
      rules: {
        "no-unused-vars": "off",
        "one-var": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
