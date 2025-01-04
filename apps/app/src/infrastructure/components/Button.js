import { Pressable } from 'react-native'

import { useStyles } from '@/infrastructure/hooks/useStyles'
import { spacerHalf, borderRadius, borderWidth, height } from '@/infrastructure/styles'

function Button ({ children, ...props }) {
  // TODO: change button style if is disabled.
  const styles = useStyles({
    button: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacerHalf,
      borderRadius,
      borderWidth,
      height
    }
  })
  return (
    <Pressable style={styles.button} {...props}>
      {children}
    </Pressable>
  )
}

export { Button }
