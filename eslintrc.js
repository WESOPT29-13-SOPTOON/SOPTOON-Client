module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    settings: {
        react: {
          version: "detect",
        },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 13,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    },
  };