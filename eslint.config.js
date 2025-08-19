// eslint.config.js
const eslintPluginNode = require("eslint-plugin-n");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script", // CommonJS (Sails apps use require/module.exports)
      globals: {
        ...globals.node,
        sails: "readonly", // sails global
      },
    },
    plugins: {
      n: eslintPluginNode,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off", // because Sails injects models like User, Message, etc.
      "n/no-missing-import": "off",
    },
  },

  // Jest overrides
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
