import { Box } from '@/infrastructure/components/Box'
import { Paragraph } from '@/infrastructure/components/Paragraph'
import { Select } from '@/infrastructure/components/Select'
import config from '@/infrastructure/config'
import { changeLanguage, useTranslation } from '@/infrastructure/i18n'

function Settings ({ navigation }) {
  const { t } = useTranslation()
  function updateLanguage (language) {
    changeLanguage(language)
  }

  return (
    <Box>
      <Paragraph>Settings Screen</Paragraph>
      <Select items={config.languages} onSelectChange={updateLanguage} />
      <Paragraph>{t('test')}</Paragraph>
    </Box>
  )
}

export default Settings
