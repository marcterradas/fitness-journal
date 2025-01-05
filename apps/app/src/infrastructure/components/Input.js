import { TextInput } from 'react-native-paper'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, height } from '@/infrastructure/styles'

function Input (props) {
  const { isMobile } = useDeviceType()
  const [passwordVisible, setPasswordVisible] = useState(false)
  const isPassword = props.textContentType === 'password'

  const style = useStyles({
    input: {
      width: '100%',
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      height
    }
  })

  const rightIcon = useMemo(() => {
    if (!isPassword) return null
    return (
      <TextInput.Icon
        icon={passwordVisible ? 'eye-off' : 'eye'}
        onPress={() => setPasswordVisible(!passwordVisible)}
      />
    )
  }, [isPassword, passwordVisible])

  return (
    <TextInput
      {...props}
      mode="outlined"
      style={style.input}
      right={rightIcon}
      secureTextEntry={isPassword && !passwordVisible}
    />
  )
}

export { Input }
