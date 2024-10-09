import ignores from "@peggyjs/eslint-config/ignores.js";
import mocha from "@peggyjs/eslint-config/mocha.js";
import module from "@peggyjs/eslint-config/module.js";
import ts from "@peggyjs/eslint-config/ts.js";

export default [
  ...ignores,
  ...module,
  ...ts,
  ...mocha,
];
