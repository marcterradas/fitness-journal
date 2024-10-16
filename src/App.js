import { DesktopSideBar } from '@/application/DesktopSideBar'

import '@/infrastructure/i18n'
import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { useStyles } from '@/infrastructure/hooks/useStyles'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()
  const styles = useStyles({
    app: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh'
    }
  })

  if (isDesktop) {
    return (
      <Box style={styles.app}>
        <DesktopSideBar />
        <Paragraph>content ...</Paragraph>
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
