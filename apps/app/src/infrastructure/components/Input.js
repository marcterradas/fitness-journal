import { TextInput } from 'react-native'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes, spacerHalf, borderWidth, borderRadius } from '@/infrastructure/styles'

function Input (props) {
  const { isMobile } = useDeviceType()

  const style = useStyles({
    input: {
      fontSize: isMobile ? fontSizes.sm : fontSizes.md,
      padding: spacerHalf,
      borderWidth,
      borderRadius
    }
  })

  return (
    <TextInput style={style.input} {...props} />
  )
}

export { Input }
