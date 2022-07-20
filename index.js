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
  // Up-to-date as of eslint 7.27.0
  rules: {
    // ----- Possible Errors -----
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",

    // Disabled because await in loops have legitimate uses.
    "no-await-in-loop": "off",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",

    // Disabled because `console` has legitimate uses.
    "no-console": "off",
    "no-constant-condition": "error",

    // Disabled because there is no other way to match control characters in
    // regexps.
    "no-control-regex": "off",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",

    // Disabled because extra parens sometimes improve readability.
    "no-extra-parens": "off",
    "no-extra-semi": "error",
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
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",

    // Disabled because when matching an exact number of spaces, writing them
    // out is usually better than using the `{n}` syntax. It makes the regexp
    // more similar to matched strings.
    "no-regex-spaces": "off",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "off",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "off",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",

    // ----- Best Practices -----

    "accessor-pairs": "off",

    // Disabled because this is just guessing.
    "array-callback-return": "off",

    // Enabled, however this isn't strictly necessary because `var` declarations
    // are not allowed at all by `no-var`. But it can't hurt.
    //
    // @es5
    "block-scoped-var": "error",
    // Disabled because class methods without `this` have legitimate uses, for
    // example when a class has to implement a dummy empty method to conform to
    // an interface.
    "class-methods-use-this": "off",

    // Disabled because code quality issues are generally not checked.
    "complexity": "off",
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": "error",
    "grouped-accessor-pairs": "error",

    // Enabled, but it's better to use `Object.keys(...).forEach` instead of
    // `for...in`.
    "guard-for-in": "error",

    // Trust the developer to do the right thing
    "max-classes-per-file": "off",

    // Disabled because `alert`, `prompt`, and `confirm` have legitimate uses.
    "no-alert": "off",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-constant-binary-expression": "error",
    "no-div-regex": "off",

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
    "no-empty-function": "error",

    // Disabled because empty destructuring patterns have potential legitimate
    // uses.
    "no-empty-pattern": "off",

    // Enabled, however this isn't strictly necessary because `==` and `!=`
    // are not allowed at all by `eqeqeq`. But it can't hurt.
    "no-eq-null": "error",

    // Disabled because `eval` has legitimate uses.
    "no-eval": "off",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",

    // Disabled because this is just guessing and there are frameworks like
    // Mocha where `this` is regularly used outside of classes.
    "no-invalid-this": "off",
    "no-iterator": "error",

    // Disabled because while labels are used sparingly, when you need them, you
    // really need them.
    "no-labels": "off",
    "no-lone-blocks": "error",
    "no-loop-func": "error",

    // Disabled because sometimes putting a number inline is better than
    // complicating the code by creating a constant.
    "no-magic-numbers": "off",

    // Disabled because multiple spaces are often used for alignment.
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-new": "error",

    // Disabled because `Function` constructor has legitimate uses.
    "no-new-func": "off",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",

    // Disabled because reassigning parameters is occasionally useful, e.g.
    // when setting default values or when transforming a parameter that can be
    // supplied in multiple formats into a canonical one.
    "no-param-reassign": "off",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "off",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "off", // Not using private yet
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-with": "error",

    // Leave off until all of our supported browsers support it
    "prefer-named-capture-group": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",

    // Set to require a radix even though it always defaults to 10 in ES5+. It
    // prevents confusion.
    "radix": "error",
    "require-await": "error",

    // Leave off until all of our supported browsers support it.  Even then,
    // probably leave it off.
    "require-unicode-regexp": "off",

    // Disabled because while putting variable declarations at the top is
    // generally a good idea, it's not always practical. For example, modifying
    // function parameters to set a default value should come before any
    // variable declaration.
    //
    // Moreover, `var` declarations are not allowed at all by `no-var`.
    //
    // @es5
    "vars-on-top": "off",
    "wrap-iife": ["error", "inside"],
    "yoda": "error",

    // ----- Strict Mode -----

    "strict": "error",

    // ----- Variables -----

    "init-declarations": "off",

    // Enabled, however this isn't strictly necessary because strict mode parser
    // doesn't allow to use `delete` with an unqualified identifier. But it
    // can't hurt.
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",

    // Disabled because sometimes one wants to be explicit about initializing a
    // variable to `undefined`.
    "no-undef-init": "off",
    "no-undefined": "off",
    "no-unused-vars": "error",

    // Disabled to allow implementing mutual recursion. Setting the rule to just
    // avoid checking functions isn't enough because these functions may be
    // defined using variables (e.g. when created using a builder).
    "no-use-before-define": "off",

    // ----- Stylistic Issues -----

    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],

    // There are a few files where we use spacing in arrays to our advantage
    "array-element-newline": "off",
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true,
    }],

    // We have underscores in our public API already
    "camelcase": "off",
    "capitalized-comments": ["error", "always", {
      ignorePattern: "c8",
      ignoreConsecutiveComments: true,
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
    "consistent-this": "off",
    "eol-last": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "id-denylist": "off",

    // Disabled because code quality issues are generally not checked.
    "id-length": "off",

    // Disabled because it seems redundant with `camelcase`.
    "id-match": "off",
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
    "lines-between-class-members": "error",

    // Disabled because code quality issues are generally not checked.
    "max-depth": "off",

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
    "max-lines": "off",
    "max-lines-per-function": "off",

    // Disabled because code quality issues are generally not checked.
    "max-nested-callbacks": "off",

    // Disabled because code quality issues are generally not checked.
    "max-params": "off",

    // Disabled because code quality issues are generally not checked.
    "max-statements": "off",

    // Disabled because code quality issues are generally not checked.
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],
    "new-parens": "error",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",

    // Disabled because bitwise operators have legitimate uses.
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",

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
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],

    // Disabled because the usual rule is to put more important or common case
    // into the `if` branch and the less important or uncommon case into the
    // `else` branch, even if that means negating the condition.
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-tabs": "error",
    "no-ternary": "off",
    "no-trailing-spaces": "error",

    // Disabled because leading underscores are used to mark private members in
    // classes and trailing underscores are used to avoid collisions with
    // reserved words.
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "off",

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
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "off",
    "prefer-object-spread": "error",
    "prefer-object-has-own": "off", // Not using ES2022 yet
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { avoidEscape: true }],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { before: false, after: true }],
    "semi-style": "error",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error", { "int32Hint": true }],
    "space-unary-ops": ["error", { words: true, nonwords: false }],
    "spaced-comment": [
      "error",
      "always",
      {
        line: { markers: ["/"] },
        block: { markers: ["*"], balanced: true },
      },
    ],
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "wrap-regex": "off",

    // ----- ECMAScript 6 -----

    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": ["error", "after"],
    "no-class-assign": "error",
    "no-confusing-arrow": "off",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": ["error", { includeExports: true }],
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",

    // This catches too many things that are ok.
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",

    // Disabled because the decision between using string concatenation or a
    // template literal is a subtle one and it shouldn't be done mechanically.
    "prefer-template": "off",
    "require-yield": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": [
      "error",
      {
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      },
    ],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"],
  },
};
