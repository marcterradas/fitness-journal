import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import '@/infrastructure/i18n'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()

  if (isDesktop) {
    return (
      <Box>
        <Paragraph>Desktop ...</Paragraph>
      </Box>
    )
  }

  if (isMobile) {
    return (
      <Box>
        <Paragraph>Mobile ...</Paragraph>
      </Box>
    )
  }
}

registerRootComponent(App)
