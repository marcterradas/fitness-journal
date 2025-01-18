import '@/infrastructure/i18n'

import { Layout } from '@/application/Layout'

import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { Components as ComponentsProvider } from '@/infrastructure/providers/Components'

export function App () {
  return (
    <ComponentsProvider>
      <Layout />
    </ComponentsProvider>
  )
}

registerRootComponent(App)
