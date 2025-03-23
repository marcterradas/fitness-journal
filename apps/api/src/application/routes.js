import { login } from '../domain/handlers/auth.js'
import { getUser } from '../domain/handlers/user.js'
import { server } from '../infrastructure/server.js'

server.post('/login', {}, login)

server.get('/user/:userId', {}, getUser)
