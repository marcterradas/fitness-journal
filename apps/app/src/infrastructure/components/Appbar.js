import { Appbar as PaperAppbar } from 'react-native-paper'

import { useTranslation } from '@/infrastructure/i18n'
import { useNavigationStore } from '@/infrastructure/stores/navigation'

function Appbar () {
  const { t } = useTranslation()
  const currentRoute = useNavigationStore((state) => state.currentRoute)
  const title = t(`navigation.label.${currentRoute}`)

  return (
    <PaperAppbar.Header>
      <PaperAppbar.Content
        title={title}
      />
    </PaperAppbar.Header>
  )
}

export { Appbar }
