import { Bottom } from '@/application/mobile/Bottom'
import { NavBar } from '@/application/mobile/NavBar'

import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacerHalf } from '@/infrastructure/styles'

function Layout ({ children, navigation }) {
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
        <NavBar navigation={navigation} />
        <Box style={styles.content}>
          {children}
        </Box>
      </Box>
      <Bottom navigation={navigation} />
    </Box>
  )
}

export { Layout }
