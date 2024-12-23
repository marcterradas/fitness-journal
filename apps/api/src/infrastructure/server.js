import Fastify from 'fastify'

import config from './config.js'
import { client } from './database.js'

const server = Fastify({
  logger: config.environment === 'production'
})

async function start () {
  try {
    await server.listen({ port: config.port })
  } catch (err) {
    console.error(err)
    server.log.error(err)
    process.exit(1)
  }
}

async function shutDown () {
  console.log('Shutting down server...')
  await client.close()
  console.log('Database connection closed.')
  process.exit(0)
}

process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)
process.on('exit', shutDown)

export { server, start }
