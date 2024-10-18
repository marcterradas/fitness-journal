import { Text } from 'react-native'

function Paragraph ({ children, style }) {
  return (
    <Text style={style}>
      {children}
    </Text>
  )
}

export { Paragraph }
