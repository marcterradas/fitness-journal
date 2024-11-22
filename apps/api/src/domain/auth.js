async function login (request, reply) {
  const username = request.body.username
  const password = request.body.password

  if (!username) reply.code(400).send({ message: 'username is required' })
  if (!password) reply.code(400).send({ message: 'password is required' })

  // TODO:

  reply.code(200).send({})
}

export { login }
