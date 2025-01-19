import { BottomNavigation as PaperBottomNavigation } from 'react-native-paper'

import { useState } from '@/infrastructure/hooks/useState'
import { useTranslation } from '@/infrastructure/i18n'
import { routes } from '@/infrastructure/routes'
import { useNavigationStore } from '@/infrastructure/stores/navigation'

function BottomNavigation () {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)

  const routesList = [
    { key: 'home', title: t('navigation.label.home'), focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'workout', title: t('navigation.label.workout'), focusedIcon: 'arm-flex', unfocusedIcon: 'arm-flex-outline' },
    { key: 'profile', title: t('navigation.label.profile'), focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'settings', title: t('navigation.label.settings'), focusedIcon: 'cog', unfocusedIcon: 'cog-outline' }
  ]

  const renderScene = PaperBottomNavigation.SceneMap(routes.reduce((acc, route) => {
    acc[route.name.toLowerCase()] = route.component
    return acc
  }, {}))

  function handleIndexChange (newIndex) {
    const { key: currentRoute } = routesList[newIndex]

    setIndex(newIndex)
    useNavigationStore.setState({ currentRoute })
  }

  return (
    <PaperBottomNavigation
      navigationState={{ index, routes: routesList }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  )
}

export { BottomNavigation }
