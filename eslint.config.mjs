import cjs from "./flat/cjs.js";
import js from "./flat/js.js";
import meta from "@cto.af/eslint-plugin-meta";
import mjs from "./flat/mjs.js";
import { plugin } from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    ignores: [
      "node_modules/**",
      "test/**",
    ],
  },
  js,
  cjs,
  mjs,
  {
    files: [
      "rules/*.js",
    ],
    settings: {
      meta: {
        libs: {
          "@stylistic": stylistic,
          "@typescript-eslint": plugin,
        },
      },
    },
    ...meta.configs.all,
  },
];
