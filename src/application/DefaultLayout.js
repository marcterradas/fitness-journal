import { DesktopLayout } from '@/application/DesktopLayout'
import { MobileLayout } from '@/application/MobileLayout'

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