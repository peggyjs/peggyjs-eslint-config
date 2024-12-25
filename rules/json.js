export const rules = {
  // [Rules](https://github.com/eslint/json?tab=readme-ov-file#rules)
  "json/no-duplicate-keys": "error",
  "json/no-empty-keys": "error",
  "json/no-unnormalized-keys": ["error", { form: "NFD" }],
  "json/no-unsafe-values": "error",
  "json/top-level-interop": "off",
};
