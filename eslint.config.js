import ignores from "./ignores.js";
import meta from "@cto.af/eslint-plugin-meta";
import module from "./module.js";
import stylistic from "@stylistic/eslint-plugin";
import { plugin as ts } from "typescript-eslint";

export default [
  {
    ignores: ["test/**"],
  },
  ...ignores,
  ...module,
  {
    files: [
      "rules/*.js",
    ],
    settings: {
      meta: {
        libs: {
          "@stylistic": stylistic,
          "@typescript-eslint": ts,
        },
      },
    },
    ...meta.configs.all,
  },
];
