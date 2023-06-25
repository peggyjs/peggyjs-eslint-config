"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // From plugin:@typescript-eslint/eslint-recommended
    "constructor-super": "off",
    "getter-return": "off",
    "no-const-assign": "off",
    "no-dupe-args": "off",
    "no-dupe-class-members": "off",
    "no-dupe-keys": "off",
    "no-func-assign": "off",
    "no-import-assign": "off",
    "no-new-symbol": "off",
    "no-obj-calls": "off",
    "no-redeclare": "off",
    "no-setter-return": "off",
    "no-this-before-super": "off",
    "no-undef": "off",
    "no-unreachable": "off",
    "no-unsafe-negation": "off",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "valid-typeof": "off",

    // For all of these that have a non-plugin "off" to go with them,
    // the typescript-eslint plugin provides a superset of the original
    // rule.
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "off", // Can't config
    "@typescript-eslint/ban-ts-comment": ["error", {
      "ts-expect-error": "allow-with-description",
    }],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "off", // Not needed
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": ["error", "always"],
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error", "1tbs", {
      "allowSingleLine": true,
    }],
    "@typescript-eslint/class-literal-property-style": ["error", "getters"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        enums: "always-multiline",
        generics: "never",
        tuples: "always-multiline",
      },
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "error",
    "default-param-last": "off",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-exports": "off", // Can't config
    "@typescript-eslint/consistent-type-imports": "off", // Can't do mixed
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "off", // Can't config
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/indent": ["off", 2], // Broken, see https://github.com/typescript-eslint/typescript-eslint/issues/1824
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/key-spacing": "off", // Off in JS
    "@typescript-eslint/keyword-spacing": "error",
    "@typescript-eslint/lines-around-comment": "off", // Big changes in .d.ts
    "@typescript-eslint/lines-between-class-members": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/naming-convention": "off", // Too late
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "off", // Can't config
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "off", // Can't config
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off", // Too hard
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extra-parens": "off", // Disagree
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "off", // Can't config
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "off", // Can't config
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-magic-numbers": "off", // Too late
    "@typescript-eslint/no-meaningless-void-operator": "off", // Can't config
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "off", // Can't config
    "@typescript-eslint/no-mixed-enums": "off", // Needs parser
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-redundant-type-constituents": "off", // Can't config
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-restricted-imports": "off", // Not needed
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-throw-literal": "off", // Can't config
    "@typescript-eslint/no-type-alias": "off", // Not important
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // Can't config
    "@typescript-eslint/no-unnecessary-condition": "off", // Can't config
    "@typescript-eslint/no-unnecessary-qualifier": "off", // Can't config
    "@typescript-eslint/no-unnecessary-type-arguments": "off", // Can't config
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // Can't config
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "off", // Can't config
    "@typescript-eslint/no-unsafe-assignment": "off", // Can't config
    "@typescript-eslint/no-unsafe-call": "off", // Can't config
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-unsafe-member-access": "off", // Can't config
    "@typescript-eslint/no-unsafe-return": "off", // Can't config
    "@typescript-eslint/no-unused-expressions": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "off", // Can't config
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/padding-line-between-statements": "error",
    "@typescript-eslint/parameter-properties": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "off", // Can't config
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "off", // Can't config
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "off", // Can't config
    "@typescript-eslint/prefer-readonly": "off", // Can't config
    "@typescript-eslint/prefer-reduce-type-parameter": "off", // Can't config
    "@typescript-eslint/prefer-regexp-exec": "off", // Can't config
    "@typescript-eslint/prefer-return-this-type": "off", // Can't config
    "@typescript-eslint/prefer-string-starts-ends-with": "off", // Can't config
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "off", // Can't config
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    "@typescript-eslint/require-array-sort-compare": "off", // Can't config
    "@typescript-eslint/require-await": "off", // Can't config
    "@typescript-eslint/restrict-plus-operands": "off", // Can't config
    "@typescript-eslint/restrict-template-expressions": "off", // Can't config
    "@typescript-eslint/return-await": "off", // Can't config
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/space-before-blocks": "error",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": ["error", { "int32Hint": true }],
    "@typescript-eslint/strict-boolean-expressions": "off", // Can't config
    "@typescript-eslint/switch-exhaustiveness-check": "off", // Can't config
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/typedef": "error",
    "@typescript-eslint/unbound-method": "off", // Can't config
    "@typescript-eslint/unified-signatures": "off", // Too hard
  },
};
