import { ButtonBar } from '@/application/mobile/ButtonBar'
import { NavBar } from '@/application/mobile/NavBar'

import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function Layout ({ children }) {
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
    mobileContent: {
      flex: 1
    }
  })

  return (
    <Box style={styles.mobile}>
      <Box style={styles.mobileContent}>
        <NavBar />
        {children}
      </Box>
      <ButtonBar />
    </Box>
  )
}

export { Layout }
