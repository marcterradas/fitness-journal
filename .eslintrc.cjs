// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'standard'],
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 'off', // required for importing with the alias.
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: '@/application/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/infrastructure/**',
            group: 'internal',
            position: 'before'
          },
          {
            pattern: '@/domain/**',
            group: 'internal',
            position: 'before'
          }
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'error',
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2]
  }
}
