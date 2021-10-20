module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "react-app",
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
