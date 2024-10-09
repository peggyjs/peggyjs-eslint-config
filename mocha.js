import globals from "globals";
import mocha from "eslint-plugin-mocha";

export default [{
  files: [
    "test/**/*.{spec,test}.{js,ts,cjs,mjs}",
  ],
  languageOptions: {
    globals: globals.mocha,
  },
  plugins: {
    mocha,
  },
  rules: {
    ...mocha.configs.recommended.rules,
    "mocha/no-mocha-arrows": "off",
  },
}];
