// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'standard'],
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 'off', // Required for importing with the alias.
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'error',
    indent: ['error', 2]
  }
}
