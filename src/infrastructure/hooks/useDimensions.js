import { Dimensions } from 'react-native'

function useDimensions () {
  const screenHeight = Dimensions.get('window').height
  const screenWidth = Dimensions.get('window').width

  return { screenHeight, screenWidth }
}

export { useDimensions }
