import { Appbar as PaperAppbar } from 'react-native-paper'

import { useStyles } from '@/infrastructure/hooks/useStyles'
import { useTranslation } from '@/infrastructure/i18n'
import { useNavigationStore } from '@/infrastructure/stores/navigation'
import { colors } from '@/infrastructure/styles'

function Appbar () {
  const { t } = useTranslation()
  const currentRoute = useNavigationStore((state) => state.currentRoute)
  const title = t(`navigation.label.${currentRoute}`)

  const styles = useStyles({
    appbar: {
      backgroundColor: colors.white
    }
  })

  return (
    <PaperAppbar style={styles.appbar}>
      <PaperAppbar.Header>
        <PaperAppbar.Content
          title={title}
        />
      </PaperAppbar.Header>
    </PaperAppbar>
  )
}

export { Appbar }
