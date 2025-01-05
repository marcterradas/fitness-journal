import { Box } from '@/infrastructure/components/Box'
import { Button } from '@/infrastructure/components/Button'
import { Card } from '@/infrastructure/components/Card'
import { Input } from '@/infrastructure/components/Input'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { login } from '@/infrastructure/service/api'
import { useUserStore } from '@/infrastructure/stores/user'
import { spacer } from '@/infrastructure/styles'

function Login ({ navigation }) {
  const { t } = useTranslation()
  const { isMobile } = useDeviceType()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isButtonDisabled = useMemo(() => !username || !password, [username, password])

  const styles = useStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'auto',
      width: isMobile ? '100%' : '30%',
      padding: spacer
    },
    content: {
      display: 'flex',
      height: '100%',
      gap: spacer,
      width: '100%'
    }
  })

  function doLogin () {
    if (!username) {
      // TODO: show error.
      return
    }
    if (!password) {
      // TODO: show error.
      return
    }
    // TODO: sanitize username and password.
    const user = login({ username, password })

    if (user) {
      useUserStore.setState({ user })
      navigation.navigate('Home')
    }
  }

  const content = (
    <Box style={styles.content}>
      <Input
        label={t('login.label.username')}
        value={username}
        onChangeText={setUsername}
        autoFocus
        textContentType='username'
      />
      <Input
        label={t('login.label.password')}
        value={password}
        onChangeText={setPassword}
        textContentType='password'
        secureTextEntry
      />
      <Button
        disabled={isButtonDisabled}
        onPress={doLogin}
      >
        <Paragraph>
          {t('login.label.login')}
        </Paragraph>
      </Button>
    </Box>
  )

  return (
    <Card
      title={t('login.label.login')}
      style={styles.container}
      contentStyle={styles.content}
      content={content}
    />
  )
}

export default Login
