import { login } from '../domain/auth.js'
import { server } from '../infrastructure/server.js'

server.post('/login', {}, login)
