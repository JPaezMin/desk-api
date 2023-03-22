module.exports = {
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "prettier"],
  plugins: [],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    // override/add rules settings here, such as:
    "vue/no-unused-vars": "error",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
