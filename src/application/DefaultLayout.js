import { Layout as DesktopLayout } from '@/application/desktop/Layout'
import { Layout as MobileLayout } from '@/application/mobile/Layout'

import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'

function DefaultLayout ({ children }) {
  const { isMobile } = useDeviceType()
  const Layout = isMobile ? MobileLayout : DesktopLayout

  return (
    <SafeArea>
      <Layout>
        {children}
      </Layout>
    </SafeArea>
  )
}

export { DefaultLayout }
