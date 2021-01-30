module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    "project": './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/jsx-one-expression-per-line': 0,
  },
};
