import { Text } from 'react-native-web'

function Paragraph ({ children, style }) {
  return (
    <Text style={style}>
        {children}
    </Text>
  )
}

export { Paragraph }
