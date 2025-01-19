import { Box } from '@/infrastructure/components/Box'
import { Button } from '@/infrastructure/components/Button'
import { Dialog } from '@/infrastructure/components/Dialog'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { Select } from '@/infrastructure/components/Select'
import config from '@/infrastructure/config'
import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { changeLanguage, useTranslation } from '@/infrastructure/i18n'
import { useUserStore } from '@/infrastructure/stores/user'
import { spacer, spacerHalf, colors } from '@/infrastructure/styles'

function Settings () {
  const { t } = useTranslation()
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const logout = useUserStore((state) => state.clearUser)

  const changeLanguageLabel = `${t('settings.label.changeLanguage')}:`

  const styles = useStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacer,
      padding: spacer
    },
    element: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacerHalf
    }
  })

  function updateLanguage (language) {
    changeLanguage(language)
  }

  return (
    <Box style={styles.content}>
      <Box style={styles.element}>
        <Paragraph>{changeLanguageLabel}</Paragraph>
        <Select
          options={config.languages}
          onValueChange={updateLanguage}
        />
      </Box>
      <Button
        icon="logout"
        color={colors.red}
        onPress={() => setIsDialogVisible(true)}
      >
        {t('settings.label.logout')}
      </Button>
      <Dialog
        visible={isDialogVisible}
        onDismiss={() => setIsDialogVisible(false)}
        onConfirm={logout}
        title={t('settings.label.logout')}
        content={t('settings.label.confirmLogout')}
      />
    </Box>
  )
}

export default Settings
