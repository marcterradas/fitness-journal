import { Box } from '@/infrastructure/components/Box'
import { Button } from '@/infrastructure/components/Button'
import { Card } from '@/infrastructure/components/Card'
import { Input } from '@/infrastructure/components/Input'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { Select } from '@/infrastructure/components/Select'
import config from '@/infrastructure/config'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation, changeLanguage } from '@/infrastructure/i18n'
import { login } from '@/infrastructure/service/api'
import { useUserStore } from '@/infrastructure/stores/user'
import { spacer, spacerHalf } from '@/infrastructure/styles'

function Login ({ navigation }) {
  const { t } = useTranslation()
  const { isMobile } = useDeviceType()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isButtonDisabled = useMemo(() => !username || !password, [username, password])

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

  function updateLanguage (language) {
    changeLanguage(language)
  }

  const styles = useStyles({
    container: {
      display: 'flex',
      alignItems: 'flex-end',
      width: isMobile ? '100%' : '30%',
      gap: spacerHalf
    },
    cardContent: {
      display: 'flex',
      height: 'auto',
      gap: spacer,
      width: '100%'
    }
  })

  const content = (
    <Box style={styles.cardContent}>
      <Input
        type='username'
        label={t('login.label.username')}
        value={username}
        onChangeText={setUsername}
        autoFocus
      />
      <Input
        type='password'
        label={t('login.label.password')}
        value={password}
        onChangeText={setPassword}
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
    <Box style={styles.container}>
      <Card
        title={t('login.label.login')}
        content={content}
      />
      <Select
        isCompact
        options={config.languages}
        onValueChange={updateLanguage}
      />
    </Box>
  )
}

export default Login
