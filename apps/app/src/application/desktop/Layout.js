import { SideBar } from '@/application/desktop/SideBar'

import { Box } from '@/infrastructure/components/Box'
import { useDimensions } from '@/infrastructure/hooks/useDimensions'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacer } from '@/infrastructure/styles'

function Layout ({ children, navigation }) {
  const { screenHeight } = useDimensions()
  const styles = useStyles({
    desktop: {
      display: 'flex',
      flexDirection: 'row',
      height: screenHeight
    },
    content: {
      padding: spacer
    }
  })

  return (
    <Box style={styles.desktop}>
      <SideBar navigation={navigation} />
      <Box style={styles.content}>
        {children}
      </Box>
    </Box>
  )
}

export { Layout }
