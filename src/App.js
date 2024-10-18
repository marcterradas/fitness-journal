import { DesktopLayout } from '@/application/DesktopLayout'
import { MobileLayout } from '@/application/MobileLayout'

import '@/infrastructure/i18n'
import { SafeArea } from '@/infrastructure/components/SafeArea'
import { useDeviceType } from '@/infrastructure/hooks/useDeviceType'
import { registerRootComponent } from '@/infrastructure/hooks/useRegisterRootComponent'

export function App () {
  const { isMobile } = useDeviceType()

  return (
    <SafeArea>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </SafeArea>
  )
}

registerRootComponent(App)
