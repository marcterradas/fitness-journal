import { SafeAreaView } from 'react-native' // TODO move to infrastructure

import { DesktopLayout } from '@/application/DesktopLayout'
import { MobileLayout } from '@/application/MobileLayout'

import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'

function DefaultLayout ({ children }) {
  const { isMobile } = useDeviceType()
  const Layout = isMobile ? MobileLayout : DesktopLayout

  return (
    <SafeAreaView>
      <Layout>
        {children}
      </Layout>
    </SafeAreaView>
  )
}

export { DefaultLayout }
