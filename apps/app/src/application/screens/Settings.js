import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { Select } from '@/infrastructure/components/Select'
import config from '@/infrastructure/config'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { changeLanguage, useTranslation } from '@/infrastructure/i18n'
import { spacer, spacerHalf } from '@/infrastructure/styles'

function Settings () {
  const { t } = useTranslation()
  const changeLanguageLabel = `${t('settings.label.changeLanguage')}:`

  const styles = useStyles({
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacerHalf,
      padding: spacer
    }
  })

  function updateLanguage (language) {
    changeLanguage(language)
  }

  return (
    <Box style={styles.content}>
      <Paragraph>{changeLanguageLabel}</Paragraph>
      <Select
        options={config.languages}
        onValueChange={updateLanguage}
      />
    </Box>
  )
}

export default Settings
