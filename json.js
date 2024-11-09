import json from "@eslint/json";
import { rules } from "./rules/json.js";

export default [{
  files: ["**/*.json"],
  plugins: { json },
  language: "json/json",
  rules,
},
{
  files: [
    "**/*.jsonc",
    ".vscode/*.json",
    "**/tsconfig.json",
    "**/tsconfig-base.json",
  ],
  plugins: { json },
  language: "json/jsonc",
  languageOptions: {
    allowTrailingCommas: true,
  },
  rules,
},
{
  files: ["**/*.json5"],
  plugins: { json },
  language: "json/json5",
  rules,
}];
