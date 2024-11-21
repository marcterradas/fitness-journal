import { server } from './server.js'
import { helloWorld } from '../application/test.js'

server.get('/', {}, helloWorld)
