import { encrypt, sanitize } from './utils.js'
import config from '../infrastructure/config.js'
import { client } from '../infrastructure/database.js'

/**
 * Handles user login.
 *
 * @param {string} request.body.username - The username of the user.
 * @param {string} request.body.password - The password of the user.
 * @returns {Promise<void>} The response to the client.
 *
 * @response {400} Bad Request - If username or password is missing.
 * @response {404} Not Found - If the user is not found.
 * @response {200} OK - If the user is successfully authenticated.
 * @response {500} Internal Server Error - If there is a server error.
 */
async function login (request, reply) {
  const username = sanitize(request.body?.username)
  const password = sanitize(request.body?.password)
  const encryptedPassword = encrypt(password)

  if (!username) reply.code(400).send({ message: 'username is required.' })
  if (!password) reply.code(400).send({ message: 'password is required.' })

  try {
    const users = client.db(config.database).collection(config.usersCollection)
    const user = await users.findOne({ username, password: encryptedPassword })

    if (!user) reply.code(404).send({ message: 'user not found.' })

    reply.code(200).send({ user })
  } catch (err) {
    console.error(err)
    reply.code(500).send({ message: err.message })
  }
}

export { login }
