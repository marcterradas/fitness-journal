import { lazy } from 'react'

const Home = lazy(() => import('@/application/screens/Home'))
const Profile = lazy(() => import('@/application/screens/Profile'))
const Settings = lazy(() => import('@/application/screens/Settings'))
const Workout = lazy(() => import('@/application/screens/Workout'))

const routes = [
  { name: 'Home', component: Home },
  { name: 'Profile', component: Profile },
  { name: 'Settings', component: Settings },
  { name: 'Workout', component: Workout }
]

export { routes }
