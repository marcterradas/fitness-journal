import { TextInput } from 'react-native'

function Input ({ style, ...props }) {
  return (
    <TextInput style={style} {...props} />
  )
}

export { Input }
