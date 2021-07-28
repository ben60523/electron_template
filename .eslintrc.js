module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [1, { js: 'always' }],
  },
  settings: {
    'import/core-modules': [
      'electron',
      'webpack',
      'mini-css-extract-plugin',
      'webpack-bundle-analyzer',
      'html-webpack-plugin',
    ],
  },
};
