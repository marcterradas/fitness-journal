import { Box } from '@/infrastructure/components/Box'
import { Input } from '@/infrastructure/components/Input'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { spacer } from '@/infrastructure/styles'

function Login ({ navigation }) {
  const { t } = useTranslation()
  const { isMobile } = useDeviceType()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const styles = useStyles({
    Login: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      gap: spacer,
      padding: spacer,
      width: isMobile ? '100%' : '30%'
    }
  })

  return (
    <Box style={styles.Login}>
      <Input
        placeholder={t('login.label.email')}
        value={username}
        onChangeText={setUsername}
        autoFocus
        textContentType='emailAddress'
      />
      <Input
        placeholder={t('login.label.password')}
        value={password}
        onChangeText={setPassword}
        textContentType='password'
        secureTextEntry
      />
    </Box>
  )
}

export default Login
