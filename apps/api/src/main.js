import { server, start } from './infrastructure/server.js'

server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

start()
