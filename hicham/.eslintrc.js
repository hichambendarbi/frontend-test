module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
  },
};
