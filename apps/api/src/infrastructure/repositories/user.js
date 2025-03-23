import config from '../config.js'
import { client, ObjectId } from '../database.js'

async function getUserById (id) {
  const users = client.db(config.database).collection(config.usersCollection)
  const user = await users.findOne({ _id: new ObjectId(id) })
  return user
}

async function getUserByUsernameAndPassword (username, password) {
  const users = client.db(config.database).collection(config.usersCollection)
  const user = await users.findOne({ username, password })
  return user
}

export {
  getUserByUsernameAndPassword,
  getUserById
}
