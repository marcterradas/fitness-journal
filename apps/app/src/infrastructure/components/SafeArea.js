import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import { useStyles } from '@/infrastructure/hooks/useStyles'

function SafeArea ({ children }) {
  const styles = useStyles({
    safeArea: {
      flex: 1
    }
  })

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export { SafeArea }
