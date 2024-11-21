import { helloWorld } from '../domain/test.js'
import { server } from '../infrastructure/server.js'

server.get('/', {}, helloWorld)
