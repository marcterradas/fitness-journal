import { TextInput } from 'react-native-paper'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, height, borderRadius } from '@/infrastructure/styles'

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
      return (
        <TextInput.Icon
          icon="chevron-down"
          onPress={props.onPress}
        />
      )
    default:
      return null
    }
  }, [props.type, passwordVisible, props.onPress])

  const style = useStyles({
    input: {
      borderRadius,
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      height,
      width: '100%'
    },
    compact: {
      backgroundColor: 'transparent',
      borderRadius,
      fontSize: fontSizes.sm,
      height: 30,
      width: 120
    },
    underlineStyle: {
      height: 0
    }
  })

  return (
    <TextInput
      {...props}
      mode={props.isCompact ? 'flat' : 'outlined'}
      style={props.isCompact ? style.compact : style.input}
      underlineStyle={style.underlineStyle}
      right={rightIcon}
      secureTextEntry={isPassword}
    />
  )
}

export { Input }
