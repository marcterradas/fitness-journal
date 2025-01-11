import { DefaultLayout } from '@/application/common/DefaultLayout'
import { Layout as LoginLayout } from '@/application/common/LoginLayout'

import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useUserStore } from '@/infrastructure/stores/user'

function Layout ({ children, navigation }) {
  const user = useUserStore((state) => state.user)

  if (!user) {
    return (
      <LoginLayout>
        {children}
      </LoginLayout>
    )
  }

  return (
    <SafeArea>
      <DefaultLayout navigation={navigation}>
        {children}
      </DefaultLayout>
    </SafeArea>
  )
}

export { Layout }
