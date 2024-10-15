import { Text } from 'react-native'

import { Box } from '@/infrastructure/components/Box'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import '@/infrastructure/i18n'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()

  if (isDesktop) {
    return (
      <Box>
        <Text>Desktop ...</Text>
      </Box>
    )
  }

  if (isMobile) {
    return (
      <Box>
        <Text>Mobile ...</Text>
      </Box>
    )
  }
}

registerRootComponent(App)
