import commonjs from "@peggyjs/eslint-config/commonjs.js";
import mocha from "@peggyjs/eslint-config/mocha.js";
import ts from "@peggyjs/eslint-config/ts.js";

export default [
  ...commonjs,
  ...ts,
  ...mocha,
];