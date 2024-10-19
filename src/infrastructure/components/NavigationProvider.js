import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Suspense } from 'react'

import { DefaultLayout } from '@/application/DefaultLayout'
import { Loader } from '@/application/Loader'

import config from '@/infrastructure/config'
import { routes } from '@/infrastructure/routes'

const Stack = createNativeStackNavigator()

function NavigationProvider () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={config.initialRouteName}>
        {routes.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            options={{ headerShown: false }}
          >
            {() => (
              <Suspense fallback={<Loader />}>
                <DefaultLayout>
                  <screen.component />
                </DefaultLayout>
              </Suspense>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { NavigationProvider }
