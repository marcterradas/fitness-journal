import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { t } from 'i18next'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'

import '@/infrastructure/i18n'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()

  return (
    <View style={styles.container}>
      {isDesktop && (
        <View style={styles.sidebar}>
          <Text>Desktop ...</Text>
        </View>
      )}
      {isDesktop && (
      <View style={styles.content}>
        <Text>{t('test')}</Text>
      </View>
      )}
      {isMobile && (
        <View style={styles.buttonBar}>
          <Text>mobile ...</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

registerRootComponent(App)
