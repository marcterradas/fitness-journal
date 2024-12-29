import '@/infrastructure/i18n'
import { Login as LoginLayout } from '@/application/layouts/Login'
import Login from '@/application/screens/Login'

import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'
import { Navigation } from '@/infrastructure/providers/Navigation'
import { useUserStore } from '@/infrastructure/stores/user'

export function App () {
  const user = useUserStore((state) => state.user)

  // If user is not logged in, show the login screen.
  if (!user) {
    return (
      <LoginLayout>
        <Login />
      </LoginLayout>
    )
  }

  // User is logged in, show the navigation.
  return (
    <Navigation />
  )
}

registerRootComponent(App)
