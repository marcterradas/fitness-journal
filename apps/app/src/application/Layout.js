import { Layout as LoginLayout } from '@/application/common/LoginLayout'
import { Layout as DesktopLayout } from '@/application/desktop/Layout'
import { Layout as MobileLayout } from '@/application/mobile/Layout'

import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { useUserStore } from '@/infrastructure/stores/user'

function Layout ({ children, navigation }) {
  const { isMobile } = useDeviceType()
  const Layout = isMobile ? MobileLayout : DesktopLayout
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
      <Layout navigation={navigation}>
        {children}
      </Layout>
    </SafeArea>
  )
}

export { Layout }
