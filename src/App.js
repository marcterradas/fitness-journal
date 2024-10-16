import { DesktopSideBar } from '@/application/DesktopSideBar'
import { MobileButtonBar } from '@/application/MobileButtonBar'

import '@/infrastructure/i18n'
import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { useStyles } from '@/infrastructure/hooks/useStyles'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()
  const styles = useStyles({
    desktop: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh'
    },
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      justifyContent: 'space-between'
    },
    mobileContent: {
      flex: 1
    }
  })

  if (isDesktop) {
    return (
      <Box style={styles.desktop}>
        <DesktopSideBar />
        <Paragraph>Content ...</Paragraph>
      </Box>
    )
  }

  if (isMobile) {
    return (
      <Box style={styles.mobile}>
        <Box style={styles.mobileContent}>
          <Paragraph>Content ...</Paragraph>
        </Box>
        <MobileButtonBar />
      </Box>
    )
  }
}

registerRootComponent(App)
