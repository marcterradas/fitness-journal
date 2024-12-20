import { encrypt, sanitize } from './utils.js'

async function login (request, reply) {
  const username = sanitize(request.body?.username)
  const password = sanitize(request.body?.password)

  if (!username) reply.code(400).send({ message: 'username is required' })
  if (!password) reply.code(400).send({ message: 'password is required' })

  const encryptedPassword = encrypt(password)

  // TODO:
  console.log(encryptedPassword)

  reply.code(200).send({})
}

export { login }
