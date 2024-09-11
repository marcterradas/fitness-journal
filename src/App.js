import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { t } from 'i18next'

import '@/infrastructure/i18n'

export function App () {
  return (
    <View style={styles.container}>
      <Text>{t('test')}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default registerRootComponent(App)
