# eslint configuration for Peggy projects

For js-only projects:

File: `.eslintrc.js` (or `.eslintrc.cjs` if you're type `"module"`):

```js
"use strict";

module.exports = {
  root: true,
  extends: ["@peggyjs"],
};
```

For projects that include typescript:

```js
"use strict";

module.exports = {
  root: true,
  extends: ["@peggyjs", "@peggyjs/eslint-config/typescript"],
};
```
