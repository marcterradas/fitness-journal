import { SideBar } from '@/application/desktop/SideBar'

import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function Layout ({ children, navigation }) {
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
      <SideBar navigation={navigation} />
      {children}
    </Box>
  )
}

export { Layout }
