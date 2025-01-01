import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Suspense } from 'react'

import { Layout } from '@/application/Layout'
import { Loader } from '@/application/Loader'

import config from '@/infrastructure/config'
import { routes } from '@/infrastructure/routes'
import { useUserStore } from '@/infrastructure/stores/user'

const Stack = createNativeStackNavigator()

function Navigation () {
  const user = useUserStore((state) => state.user)
  const initialRouteName = user ? config.initialRouteName : 'Login'
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        {routes.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            options={{ headerShown: false }}
          >
            {({ navigation }) => (
              <Suspense fallback={<Loader />}>
                <Layout navigation={navigation}>
                  <screen.component navigation={navigation} />
                </Layout>
              </Suspense>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Navigation }
