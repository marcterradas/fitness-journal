import '@/infrastructure/i18n'
import { NavigationProvider } from '@/infrastructure/components/NavigationProvider'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'

export function App () {
  return (
    <NavigationProvider />
  )
}

registerRootComponent(App)
