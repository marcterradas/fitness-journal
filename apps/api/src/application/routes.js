import { login } from '../domain/handlers/auth.js'
import { getUser } from '../domain/handlers/user.js'
import { getWorkouts } from '../domain/handlers/workout.js'
import { server } from '../infrastructure/server.js'

// Auth.
server.post('/login', {}, login)

// User.
server.get('/user/:userId', {}, getUser)

// Workout.
server.get('/workouts', {}, getWorkouts)
