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
        // Easier than fixing the hand-generated peg.d.ts
        "no-unused-vars": "off",
        "one-var": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/prefer-function-type": "off",
      },
    },
  ],
};
