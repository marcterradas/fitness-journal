import { useWindowDimensions } from 'react-native'

const useDeviceType = () => {
  const { width } = useWindowDimensions()

  const isDesktop = width >= 1440
  const isMobile = width < 1440

  return {
    isDesktop,
    isMobile
  }
}

export default useDeviceType
