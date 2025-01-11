import { useRoute } from '@react-navigation/native'
import { Appbar as PaperAppbar } from 'react-native-paper'

import { useTranslation } from '@/infrastructure/i18n'

function Appbar ({ navigation }) {
  const route = useRoute()
  const { t } = useTranslation()
  const title = t(`navigation.label.${route.name.toLocaleLowerCase()}`)

  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content
        title={title}
      />
    </PaperAppbar.Header>
  )
}

export { Appbar }
