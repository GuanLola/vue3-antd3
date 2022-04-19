/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "@vue/standard", // module eslint no error
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: true,
  },
};
