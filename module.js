import globals from "globals";
import { rules } from "./rules/js.js";
import stylistic from "@stylistic/eslint-plugin";

export default [{
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
{
  files: ["**/*.mjs"],
  languageOptions: {
    sourceType: "module", // Force
  },
},
{
  files: ["**/*.cjs"],
  languageOptions: {
    sourceType: "commonjs", // Force
  },
}];
