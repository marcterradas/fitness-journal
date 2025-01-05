import { PaperProvider } from 'react-native-paper'

function Components ({ children }) {
  return (
    <PaperProvider>
      {children}
    </PaperProvider>
  )
}

export { Components }
