import '@/infrastructure/i18n'

import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { Navigation } from '@/infrastructure/providers/Navigation'

export function App () {
  return (
    <Navigation />
  )
}

registerRootComponent(App)
