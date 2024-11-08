import { Pressable } from 'react-native'

function Link ({ children, onPress, style }) {
  return <Pressable style={style} onPress={onPress}>{children}</Pressable>
}

export { Link }
