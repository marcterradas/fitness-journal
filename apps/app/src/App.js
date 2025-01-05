import '@/infrastructure/i18n'

import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { Components as ComponentsProvider } from '@/infrastructure/providers/Components'
import { Navigation as NavigationProvider } from '@/infrastructure/providers/Navigation'

export function App () {
  return (
    <ComponentsProvider>
      <NavigationProvider />
    </ComponentsProvider>
  )
}

registerRootComponent(App)
