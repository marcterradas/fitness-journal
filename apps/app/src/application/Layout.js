import { Layout as LoginLayout } from '@/application/common/LoginLayout'
import { Layout as MobileLayout } from '@/application/mobile/Layout'

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
      <MobileLayout navigation={navigation}>
        {children}
      </MobileLayout>
    </SafeArea>
  )
}

export { Layout }
