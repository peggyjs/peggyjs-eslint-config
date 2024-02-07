"use strict";

// Use js.js before this, which has most of the config.  This just
// overrides sourceType for .mjs files.
module.exports =  {
  files: ["**/*.mjs"],
  languageOptions: {
    sourceType: "module",
  },
};
