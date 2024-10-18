import { DesktopSideBar } from '@/application/DesktopSideBar'
import { MobileButtonBar } from '@/application/MobileButtonBar'
import { MobileNavBar } from '@/application/MobileNavBar'

import '@/infrastructure/i18n'
import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { useStyles } from '@/infrastructure/hooks/useStyles'

export function App () {
  const { isDesktop, isMobile } = useDeviceType()
  const { screenHeight, screenWidth } = useDimensions()
  const styles = useStyles({
    desktop: {
      display: 'flex',
      flexDirection: 'row',
      height: screenHeight
    },
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'space-between'
    },
    mobileContent: {
      flex: 1
    }
  })

  if (isDesktop) {
    return (
      <SafeArea>
        <Box style={styles.desktop}>
          <DesktopSideBar />
          <Paragraph>Content ...</Paragraph>
        </Box>
      </SafeArea>
    )
  }

  if (isMobile) {
    return (
      <SafeArea>
        <Box style={styles.mobile}>
          <Box style={styles.mobileContent}>
            <MobileNavBar />
            <Paragraph>Content ...</Paragraph>
          </Box>
          <MobileButtonBar />
        </Box>
      </SafeArea>
    )
  }
}

registerRootComponent(App)
