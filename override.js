export default [{
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
