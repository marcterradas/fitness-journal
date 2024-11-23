module.exports = {
  extends: ['../../.eslintrc.cjs'],
  plugins: ['react'],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    strict: ['error', 'global'],
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
    ]
  }
}
