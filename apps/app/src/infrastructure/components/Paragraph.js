import { Text } from 'react-native'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { fontSizes } from '@/infrastructure/styles'

function Paragraph ({ children }) {
  const { isMobile } = useDeviceType()

  const style = useStyles({
    paragraph: {
      fontSize: isMobile ? fontSizes.sm : fontSizes.md
    }
  })
  return (
    <Text style={style.paragraph}>
      {children}
    </Text>
  )
}

export { Paragraph }
