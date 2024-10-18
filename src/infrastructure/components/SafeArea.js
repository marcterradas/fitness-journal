import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

function SafeArea ({ children }) {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export { SafeArea }
