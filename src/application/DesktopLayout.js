import { DesktopSideBar } from '@/application/DesktopSideBar'

import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
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
      <Paragraph>Content ...</Paragraph>
    </Box>
  )
}

export { DesktopLayout }
