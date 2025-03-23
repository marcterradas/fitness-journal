import { Box } from '@/infrastructure/components/Box'
import { Button } from '@/infrastructure/components/Button'
import { Card } from '@/infrastructure/components/Card'
import { Input } from '@/infrastructure/components/Input'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { Select } from '@/infrastructure/components/Select'
import { Snackbar } from '@/infrastructure/components/Snackbar'
import config from '@/infrastructure/config'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useMemo } from '@/infrastructure/hooks/useMemo'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation, changeLanguage } from '@/infrastructure/i18n'
import { login } from '@/infrastructure/service/auth'
import { useNavigationStore } from '@/infrastructure/stores/navigation'
import { useUserStore } from '@/infrastructure/stores/user'
import { spacer, spacerHalf } from '@/infrastructure/styles'

function Login () {
  const { t } = useTranslation()
  const { isMobile } = useDeviceType()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [hasFormErrors, setHasFormErrors] = useState(false)
  const [isSnakbarVisible, setIsSnackbarVisible] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const isButtonDisabled = useMemo(() => !username.trim() || !password.trim(), [username, password])

  async function doLogin () {
    // TODO: sanitize username and password.
    const { status, data: user, error } = await login({ username, password })

    if (!status) {
      setIsSnackbarVisible(true)
      setSnackbarMessage(t(error))
      setHasFormErrors(!status)
      return
    }

    useUserStore.setState({ user })
    useNavigationStore.setState({ currentRoute: 'home' })
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
        error={hasFormErrors}
        autoFocus
      />
      <Input
        type='password'
        label={t('login.label.password')}
        value={password}
        onChangeText={setPassword}
        error={hasFormErrors}
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
    <>
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
      <Snackbar
        visible={isSnakbarVisible}
        onDismiss={() => setIsSnackbarVisible(false)}
        onIconPress={() => setIsSnackbarVisible(false)}
      >
        {snackbarMessage}
      </Snackbar>
    </>
  )
}

export default Login
