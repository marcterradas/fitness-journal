import { View } from 'react-native'

function Box ({ children, style }) {
  return (
    <View style={style}>
      {children}
    </View>
  )
}

export { Box }
