import { Button as PaperButton } from 'react-native-paper'

import { useStyles } from '@/infrastructure/hooks/useStyles'
import { borderRadius, height } from '@/infrastructure/styles'

function Button ({ children, ...props }) {
  const styles = useStyles({
    button: {
      width: '100%',
      height,
      borderRadius
    }
  })

  return (
    <PaperButton
      {...props}
      mode="contained"
      style={styles.button}
      compact={false}
    >
      {children}
    </PaperButton>
  )
}

export { Button }
