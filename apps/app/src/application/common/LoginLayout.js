import { Box } from '@/infrastructure/components/Box'
import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacer } from '@/infrastructure/styles'

function Layout ({ children }) {
  const { isMobile } = useDeviceType()
  const styles = useStyles({
    login: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: isMobile ? spacer : 0
    }
  })
  return (
    <SafeArea>
      <Box style={styles.login}>
        {children}
      </Box>
    </SafeArea>
  )
}

export { Layout }
