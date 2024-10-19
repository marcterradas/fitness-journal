import { lazy } from 'react'

const HomeScreen = lazy(() => import('@/application/HomeScreen'))
const ProfileScreen = lazy(() => import('@/application/ProfileScreen'))
const SettingsScreen = lazy(() => import('@/application/SettingsScreen'))
const WorkoutScreen = lazy(() => import('@/application/WorkoutScreen'))

const routes = [
  { name: 'HomeScreen', component: HomeScreen },
  { name: 'ProfileScreen', component: ProfileScreen },
  { name: 'SettingsScreen', component: SettingsScreen },
  { name: 'WorkoutScreen', component: WorkoutScreen }
]

export { routes }
