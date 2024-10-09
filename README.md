# eslint configuration for Peggy projects

For js-only projects:

File: `eslint.config.js` (or `eslint.config.mjs` if you're in a project with
type `"commonjs"`):

```js
import mocha from "@peggyjs/eslint-config/flat/mocha.js";
// Use commonjs if you're in an older project
import module from "@peggyjs/eslint-config/flat/module.js";
import ts from "@peggyjs/eslint-config/flat/ts.js";

export default [
  ...module,
  ...ts,
  ...mocha,
];
```

If you include the ts config, you'll need to add dependencies:

```sh
npm install -D typescript typescript-eslint
```

If you include the mocha config, you'll need to add dependencies:

```sh
npm install -D eslint-plugin-mocha
```
