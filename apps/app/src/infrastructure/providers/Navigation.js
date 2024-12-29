import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Suspense } from 'react'

import { Default as Layout } from '@/application/layouts/Default'
import { Loader } from '@/application/Loader'

import config from '@/infrastructure/config'
import { routes } from '@/infrastructure/routes'

const Stack = createNativeStackNavigator()

function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={config.initialRouteName}>
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
