import { BottomNavigation as PaperBottomNavigation } from 'react-native-paper'

import { useState } from '@/infrastructure/hooks/useState'
import { useTranslation } from '@/infrastructure/i18n'
import { routes } from '@/infrastructure/routes'

function BottomNavigation ({ navigation }) {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  const routesList = [
    { key: 'home', title: t('navigation.label.home'), focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'profile', title: t('navigation.label.profile'), focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'workout', title: t('navigation.label.workout'), focusedIcon: 'arm-flex', unfocusedIcon: 'arm-flex-outline' },
    { key: 'settings', title: t('navigation.label.settings'), focusedIcon: 'cog', unfocusedIcon: 'cog-outline' }
  ]

  const renderScene = PaperBottomNavigation.SceneMap(routes.reduce((acc, route) => {
    acc[route.name.toLowerCase()] = route.component
    return acc
  }, {}))

  return (
    <PaperBottomNavigation
      navigationState={{ index, routes: routesList }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export { BottomNavigation }
