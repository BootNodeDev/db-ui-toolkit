module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
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
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'sort-destructure-keys'],
  rules: {
    'prettier/prettier': ['error'],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        pathGroups: [
          { group: 'builtin', pattern: 'react', position: 'before' },
          {
            group: 'external',
            pattern: '{styled-components,polished,next,next/*,react-dom,sanitize.css}',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/named': 'error',
    'import/no-unresolved': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^React$',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-sort-props': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
}
