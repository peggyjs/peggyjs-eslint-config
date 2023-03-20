"use strict";

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2015,
  },

  // All ESLint rules are explicitly configured here. They are structured in the
  // same way as in the ESLint rule list [1] to make referencing easier.
  //
  // The motivation behind configuration of most rules should be obvious after
  // reading each rule’s documentation. Where this is not the case, the
  // motivation is explained using a comment.
  //
  // Rule configuration usually relies on defaults provided by ESLint, but
  // stylistic rules (most of which are in "Stylistic Issues" and "ECMAScript 6"
  // sections) often have options specified explicitly even when they have
  // defaults. This improves readability because the defaults are often not
  // obvious. It would probably be best if stylistic rules didn't have any
  // defaults at all.
  //
  // Some rules are tagged with an @es5 tag. These would need attention if ES5
  // version of the configuration ever gets produced.
  //
  // [1] http://eslint.org/docs/rules/
  // Up-to-date as of eslint 8.34.0
  rules: {
    // ----- Possible Problems -----

    // Disabled because this is just guessing.
    "array-callback-return": "off",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",

    // Disabled because await in loops have legitimate uses.
    "no-await-in-loop": "off",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",

    // Disabled because there is no other way to match control characters in
    // regexps.
    "no-control-regex": "off",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",

    // Set to catch both `function` and `var` declarations in nested blocks,
    // however catching `var` declarations isn't strictly necessary because they
    // are not allowed at all by `no-var`. But it can't hurt.
    //
    // @es5
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
      },
    ],
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "off", // Not using private yet
    "no-unused-vars": "error",

    // This is going to cause problems, but I don't care.
    "no-use-before-define": "error",
    "no-useless-backreference": "error",

    // This fires too often.
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",

    // ----- Suggestions -----

    // Read-only and write-only are a thing.
    "accessor-pairs": "off",
    "arrow-body-style": "error",

    // Enabled, however this isn't strictly necessary because `var` declarations
    // are not allowed at all by `no-var`. But it can't hurt.
    //
    // @es5
    "block-scoped-var": "error",

    // We have underscores in our public API already
    "camelcase": "off",
    "capitalized-comments": ["error", "always", {
      ignorePattern: "c8",
      ignoreConsecutiveComments: true,
    }],
    "class-methods-use-this": "error",

    // Disabled because code quality issues are generally not checked.
    "complexity": "off",
    "consistent-return": "error",
    "consistent-this": ["error", "that"],
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-name-matching": "error",
    "func-names": "off", // Tedious
    "func-style": ["error", "declaration"],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "id-denylist": "off",

    // Disabled because code quality issues are generally not checked.
    "id-length": "off",

    // Disabled because it seems redundant with `camelcase`.
    "id-match": "off",
    "init-declarations": "error",

    // When we finally upgrade to ES2021, flip this to "always".
    "logical-assignment-operators": ["error", "never"],

    // Trust the developer to do the right thing
    "max-classes-per-file": "off",

    // All disabled because code quality issues are generally not checked.
    "max-depth": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "multiline-comment-style": "off",

    "new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],

    // Disabled because `alert`, `prompt`, and `confirm` have legitimate uses.
    "no-alert": "off",
    "no-array-constructor": "error",

    // Disabled because bitwise operators have legitimate uses.
    "no-bitwise": "off",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-confusing-arrow": "error",

    // This should be turned on one day.
    "no-console": "off",

    // I like continue
    "no-continue": "off",

    // Enabled, however this isn't strictly necessary because strict mode parser
    // doesn't allow to use `delete` with an unqualified identifier. But it
    // can't hurt.
    "no-delete-var": "error",
    "no-div-regex": "error",

    // Disabled because whether an `if` statement does or does not have an
    // `else` branch is meaningful.
    //
    // For example, this `if` statement is most likely a boundary condition
    // check:
    //
    //     function f() {
    //       if (...) {
    //         return ...;
    //       }
    //
    //       return ...;
    //     }
    //
    // On the other hand, this `if` statement most likely chooses between two
    // equally valid alternatives:
    //
    //     function f() {
    //       if (...) {
    //         return ...;
    //       } else {
    //         return ...;
    //       }
    //     }
    //
    // See also `no-lonely-if`.
    "no-else-return": "off",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",

    // Enabled, however this isn't strictly necessary because `==` and `!=`
    // are not allowed at all by `eqeqeq`. But it can't hurt.
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off", // Used a lot.

    // Disabled because this is just guessing and there are frameworks like
    // Mocha where `this` is regularly used outside of classes.
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-label-var": "error",

    // Disabled because while labels are used sparingly, when you need them, you
    // really need them.
    "no-labels": "off",
    "no-lone-blocks": "error",

    // Disabled because where an `if` statement is placed is meaningful.
    //
    // For example, here the second `if` statement most likely checks a
    // condition which is related to and equally important as the condition of
    // the first `if` statement:
    //
    //   if (...) {
    //     ...
    //   } else if (...) {
    //     ...
    //   }
    //
    // On the other hand, here the second `if` statement most likely checks a
    // condition which is unrelated to and less important than the condition of
    // the first `if` statement:
    //
    //   if (...) {
    //     ...
    //   } else {
    //     if (...) {
    //       ...
    //     }
    //   }
    //
    // See also `no-else-return`.
    "no-lonely-if": "off",
    "no-loop-func": "error",

    // Disabled because sometimes putting a number inline is better than
    // complicating the code by creating a constant.
    "no-magic-numbers": "off",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",

    // Disabled because the usual rule is to put more important or common case
    // into the `if` branch and the less important or uncommon case into the
    // `else` branch, even if that means negating the condition.
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",

    // Disabled because reassigning parameters is occasionally useful, e.g.
    // when setting default values or when transforming a parameter that can be
    // supplied in multiple formats into a canonical one.
    "no-param-reassign": "off",
    "no-plusplus": "off", // I don't want this joyless world.
    "no-proto": "error",
    "no-redeclare": "error",

    // Disabled because when matching an exact number of spaces, writing them
    // out is usually better than using the `{n}` syntax. It makes the regexp
    // more similar to matched strings.
    "no-regex-spaces": "off",
    "no-restricted-exports": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "off", // Disable for now.
    "no-shadow-restricted-names": "error",
    "no-ternary": "off", // Nah.
    "no-throw-literal": "error",

    // Disabled because sometimes one wants to be explicit about initializing a
    // variable to `undefined`.
    "no-undef-init": "off",
    "no-undefined": "off",

    // Disabled because leading underscores are used to mark private members in
    // classes and trailing underscores are used to avoid collisions with
    // reserved words.
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-with": "error",
    "object-shorthand": ["error", "always"],

    // Set to split initialized variable declarations into separate
    // `let`/`const`/`var` statements while grouping uninitialized declarations
    // together. The idea behind this is that initialized and uninitialized
    // variable declarations are really two different things.
    //
    // An initialized variable declaration is just an assignment which happens
    // to assign to a variable for the first time, so it must also declare it.
    // Therefore, it should be mostly treated like an assignment, which
    // naturally leads to one `let`/`const`/`var` statement per variable.
    //
    // On the other hand, uninitialized variable declaration is just an
    // assertion that the variable exists in given scope and the actual
    // assignment happens later. Here, it makes sense to save space and combine
    // all declared variables into one statement.
    "one-var": ["error", { initialized: "never", uninitialized: "always" }],

    // Disabled because `one-var` doesn't allow multiple initialized variable
    // declarations in one `let`/`const`/`var` statement and it doesn't make
    // sense to put each uninitialized variable on a separate line.
    "one-var-declaration-per-line": "off",
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",

    // This catches too many things that are ok.
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "off",

    // Leave off until all of our supported browsers support it
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "off", // Not using ES2022 yet
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",

    // Disabled because the decision between using string concatenation or a
    // template literal is a subtle one and it shouldn't be done mechanically.
    "prefer-template": "off",
    "quote-props": ["error", "consistent"],

    // Set to require a radix even though it always defaults to 10 in ES5+. It
    // prevents confusion.
    "radix": "error",
    "require-await": "error",

    // Leave off until all of our supported browsers support it.  Even then,
    // probably leave it off.
    "require-unicode-regexp": "off",
    "require-yield": "error",
    "sort-imports": [
      "error",
      {
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      },
    ],
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["/"] },
        block: { markers: ["*"], balanced: true },
      },
    ],
    "strict": "error",
    "symbol-description": "error",

    // Disabled because while putting variable declarations at the top is
    // generally a good idea, it's not always practical. For example, modifying
    // function parameters to set a default value should come before any
    // variable declaration.
    //
    // Moreover, `var` declarations are not allowed at all by `no-var`.
    //
    // @es5
    "vars-on-top": "off",
    "yoda": "error",

    // ----- Layout & Formatting -----

    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],

    // There are a few files where we use spacing in arrays to our advantage
    "array-element-newline": "off",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true,
    }],
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "never",
    }],
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "dot-location": ["error", "property"],
    "eol-last": "error",
    "func-call-spacing": "error",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "generator-star-spacing": ["error", "after"],
    "implicit-arrow-linebreak": "error",
    "indent": ["error", 2, {
      SwitchCase: 1,
      offsetTernaryExpressions: true,
    }],
    "jsx-quotes": "off",

    // We sometimes align colons across larger areas than this can find
    "key-spacing": "off",
    "keyword-spacing": "error",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "off",
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],

    // Set to ignore lines that contain strings and template literals because
    // devising more targeted pattern and putting it into `ignorePattern` would
    // be quite hard.
    "max-len": [
      "error",
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Disabled because code quality issues are generally not checked.
    "max-statements-per-line": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "new-parens": "error",
    "newline-per-chained-call": "off",

    // Disabled because extra parens sometimes improve readability.
    "no-extra-parens": "off",
    "no-mixed-spaces-and-tabs": "error",

    // Disabled because multiple spaces are often used for alignment.
    "no-multi-spaces": "off",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "off",
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "off",
    "quotes": ["error", "double", { avoidEscape: true }],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": "error",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": true }],
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "switch-colon-spacing": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "wrap-iife": ["error", "inside"],
    "wrap-regex": "off",
    "yield-star-spacing": ["error", "after"],
  },
};
