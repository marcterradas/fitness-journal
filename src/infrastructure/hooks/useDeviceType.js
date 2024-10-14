import { useWindowDimensions } from 'react-native'
import config from '@/infrastructure/config'

const useDeviceType = () => {
  const { width } = useWindowDimensions()
  const isDesktop = width >= config.desktopBreakpoint
  const isMobile = width < config.desktopBreakpoint

  return {
    isDesktop,
    isMobile
  }
}

export { useDeviceType }
