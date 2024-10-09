import ignores from "@peggyjs/eslint-config/flat/ignores.js";
import mocha from "@peggyjs/eslint-config/flat/mocha.js";
import module from "@peggyjs/eslint-config/flat/module.js";
import ts from "@peggyjs/eslint-config/flat/ts.js";

export default [
  ...ignores,
  ...module,
  ...ts,
  ...mocha,
];
