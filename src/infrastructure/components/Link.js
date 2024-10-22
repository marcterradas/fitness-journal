import { Pressable } from 'react-native'

function Link ({ children, onPress }) {
  return <Pressable onPress={onPress}>{children}</Pressable>
}

export { Link }
