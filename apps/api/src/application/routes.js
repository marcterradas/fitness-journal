import { login } from '../domain/handlers/auth.js'
import { server } from '../infrastructure/server.js'

server.post('/login', {}, login)
