module.exports = {
  extends: ['../../.eslintrc.cjs'], // Extend the root ESLint configuration
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }]
  }
}
