import { MobileButtonBar } from '@/application/MobileButtonBar'
import { MobileNavBar } from '@/application/MobileNavBar'

import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function MobileLayout ({ children }) {
  const { screenHeight, screenWidth } = useDimensions()
  const styles = useStyles({
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

  return (
    <Box style={styles.mobile}>
      <Box style={styles.mobileContent}>
        <MobileNavBar />
        <Paragraph>Content ...</Paragraph>
      </Box>
      <MobileButtonBar />
    </Box>
  )
}

export { MobileLayout }
