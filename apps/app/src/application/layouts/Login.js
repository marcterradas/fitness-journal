import { Box } from '@/infrastructure/components/Box'
import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useStyles } from '@/infrastructure/hooks/useStyles'

function Login ({ children }) {
  const styles = useStyles({
    Login: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }
  })
  return (
    <SafeArea>
      <Box style={styles.Login}>
        {children}
      </Box>
    </SafeArea>
  )
}

export { Login }
