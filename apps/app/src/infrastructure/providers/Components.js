import { PaperProvider } from 'react-native-paper'

function Components ({ children }) {
  // TODO: remove light theme.
  return (
    <PaperProvider theme={'light'}>
      {children}
    </PaperProvider>
  )
}

export { Components }
