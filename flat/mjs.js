"use strict";

// Use js.js before this, which has most of the config.  This just
// overrides sourceType for .mjs files.
// Future: Figure out what to do for module-type projects.
module.exports =  {
  files: ["**/*.mjs"],
  languageOptions: {
    sourceType: "module",
  },
};
