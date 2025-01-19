import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper'

import { colors } from '@/infrastructure/styles'
function Components ({ children }) {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white
    }
  }
  return (
    <PaperProvider theme={theme}>
      {children}
    </PaperProvider>
  )
}

export { Components }
