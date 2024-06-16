"use strict";

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "test/**",
    ],
  },
  require("./flat/js"),
  require("./flat/cjs"),
  {
    files: [
      "rules/*.js",
    ],
    plugins: {
      sort: require("@peggyjs/sort-rules"),
    },
    rules: {
      "sort/sort-rules": "error",
    },
  },
];
