import { BottomNavigation as PaperBottomNavigation } from 'react-native-paper'

import { useState } from '@/infrastructure/hooks/useState'
import { useStyles } from '@/infrastructure/hooks/useStyles'
import { routes } from '@/infrastructure/routes'
import { useNavigationStore } from '@/infrastructure/stores/navigation'
import { colors } from '@/infrastructure/styles'

function BottomNavigation () {
  const [index, setIndex] = useState(0)

  const styles = useStyles({
    bottomNavigation: {
      backgroundColor: colors.white
    }
  })

  const routesList = [
    { key: 'home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'workout', focusedIcon: 'arm-flex', unfocusedIcon: 'arm-flex-outline' },
    { key: 'profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' }
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
      barStyle={styles.bottomNavigation}
      labeled={false}
      compact={true}
    />
  )
}

export { BottomNavigation }
