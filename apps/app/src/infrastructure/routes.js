import Home from '@/application/screens/Home'
import Login from '@/application/screens/Login'
import Profile from '@/application/screens/Profile'
import Settings from '@/application/screens/Settings'
import Workout from '@/application/screens/Workout'

const routes = [
  { name: 'Home', component: Home },
  { name: 'Profile', component: Profile },
  { name: 'Settings', component: Settings },
  { name: 'Workout', component: Workout },
  { name: 'Login', component: Login }
]

export { routes }
