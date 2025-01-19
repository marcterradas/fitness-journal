import { Button as PaperButton } from 'react-native-paper'

import { useStyles } from '@/infrastructure/hooks/useStyles'
import { borderRadius, height } from '@/infrastructure/styles'

function Button ({ children, color, mode, ...props }) {
  const buttonMode = mode || 'contained'

  const styles = useStyles({
    button: {
      flex: 1,
      width: '100%',
      height,
      borderRadius,
      backgroundColor: color
    }
  })

  return (
    <PaperButton
      {...props}
      mode={buttonMode}
      style={styles.button}
      compact={false}
    >
      {children}
    </PaperButton>
  )
}

export { Button }
