import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DefaultLayout } from '@/application/DefaultLayout'
import { HomeScreen } from '@/application/HomeScreen'

function NavigationProvider () {
  const Stack = createNativeStackNavigator()

  const screens = [
    { name: 'HomeScreen', component: HomeScreen }
  ]

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
          >
            {() => (
              <DefaultLayout>
                <screen.component />
              </DefaultLayout>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { NavigationProvider }
