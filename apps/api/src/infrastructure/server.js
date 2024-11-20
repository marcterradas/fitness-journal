import Fastify from 'fastify'

const server = Fastify({
  logger: true
})

async function start () {
  try {
    // TODO: move port to config file
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

export { server, start }
