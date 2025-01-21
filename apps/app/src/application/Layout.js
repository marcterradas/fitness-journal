import { DefaultLayout } from '@/application/common/DefaultLayout'
import { Layout as LoginLayout } from '@/application/common/LoginLayout'
import LoginView from '@/application/screens/Login'

import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useUserStore } from '@/infrastructure/stores/user'

function Layout () {
  const user = useUserStore((state) => state.user)

  if (!user) {
    return (
      <LoginLayout>
        <LoginView />
      </LoginLayout>
    )
  }

  return (
    <SafeArea>
      <DefaultLayout />
    </SafeArea>
  )
}

export { Layout }
