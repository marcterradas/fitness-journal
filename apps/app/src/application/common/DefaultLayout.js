import { Appbar } from '@/infrastructure/components/Appbar'
import { BottomNavigation } from '@/infrastructure/components/BottomNavigation'
import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacerHalf } from '@/infrastructure/styles'

function DefaultLayout ({ children }) {
  const { screenHeight, screenWidth } = useDimensions()
  const styles = useStyles({
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      height: screenHeight,
      width: screenWidth,
      justifyContent: 'space-between',
      flex: 1
    },
    content: {
      padding: spacerHalf
    }
  })

  return (
    <Box style={styles.mobile}>
      <Box>
        <Appbar />
        <Box style={styles.content}>
          {children}
        </Box>
      </Box>
      <BottomNavigation />
    </Box>
  )
}

export { DefaultLayout }
