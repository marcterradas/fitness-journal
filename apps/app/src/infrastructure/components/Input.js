import { TextInput } from 'react-native-paper'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, height } from '@/infrastructure/styles'

function Input (props) {
  const { isMobile } = useDeviceType()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const isPassword = useMemo(() => props.type === 'password' && !passwordVisible, [props.type, passwordVisible])

  const rightIcon = useMemo(() => {
    switch (props.type) {
    case 'password':
      return (
        <TextInput.Icon
          icon={passwordVisible ? 'eye-off' : 'eye'}
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      )
    case 'select':
      return <TextInput.Icon icon="chevron-down" onPress={props.onPress} />
    default:
      return null
    }
  }, [props.type, passwordVisible, props.onPress])

  const style = useStyles({
    input: {
      width: '100%',
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      height
    }
  })

  return (
    <TextInput
      {...props}
      mode="outlined"
      style={style.input}
      right={rightIcon}
      secureTextEntry={isPassword}
    />
  )
}

export { Input }
