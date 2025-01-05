module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    'babel-preset-expo'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src/'
        }
      }
    ],
    'react-native-paper/babel'
  ]
}
