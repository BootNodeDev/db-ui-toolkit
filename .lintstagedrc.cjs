module.exports = {
  'src/**/*.{ts,tsx}': ['prettier --write --ignore-unknown', 'eslint --fix', 'stylelint --fix'],
}
