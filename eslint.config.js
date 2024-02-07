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
];
