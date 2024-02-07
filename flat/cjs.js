"use strict";

// Use module.js before this, which has most of the config.  This just
// overrides sourceType for .cjs files.
module.exports =  {
  files: ["**/*.cjs"],
  languageOptions: {
    sourceType: "commonjs",
  },
};
