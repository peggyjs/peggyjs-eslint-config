import globals from "globals";
import ignores from "./ignores.js";
import json from "./json.js";
import override from "./override.js";
import { rules } from "./rules/js.js";
import stylistic from "@stylistic/eslint-plugin";

export default [
  ...ignores,
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs", "**/*.ts"],
    plugins: {
      "@stylistic": stylistic,
    },
    languageOptions: {
      globals: globals["shared-node-browser"],
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules,
  },
  ...override,
  ...json,
];
