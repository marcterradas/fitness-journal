import { DesktopSideBar } from '@/application/DesktopSideBar'

import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function DesktopLayout ({ children }) {
  const { screenHeight } = useDimensions()
  const styles = useStyles({
    desktop: {
      display: 'flex',
      flexDirection: 'row',
      height: screenHeight
    }
  })

  return (
    <Box style={styles.desktop}>
      <DesktopSideBar />
      {children}
    </Box>
  )
}

export { DesktopLayout }
