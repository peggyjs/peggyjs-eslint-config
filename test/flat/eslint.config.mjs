import commonjs from "@peggyjs/eslint-config/flat/commonjs.js";
import mocha from "@peggyjs/eslint-config/flat/mocha.js";
import ts from "@peggyjs/eslint-config/flat/ts.js";

export default [
  ...commonjs,
  ...ts,
  ...mocha,
];
