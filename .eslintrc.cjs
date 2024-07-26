module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'import', 'prettier', 'sort-destructure-keys'],
  ignorePatterns: [
    'dist',
    'demo',
    'eslint.config.cjs',
    'webpack.config.js',
    'webpack.dev.config.js',
    'webpack.demo.config.js',
    '**/*.css',
    '**/*.scss',
    '**/*.html',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
}
