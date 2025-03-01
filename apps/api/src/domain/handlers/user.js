'use strict'

import config from '../../infrastructure/config.js'
import { client, ObjectId } from '../../infrastructure/database.js'
import { sanitize } from '../utils.js'

/**
 * Handles fetching a user by userId.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.userId - The ID of the user to fetch.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} The response to the client.
 *
 * @response {400} Bad Request - If userId is missing.
 * @response {404} Not Found - If the user is not found.
 * @response {200} OK - If the user is successfully fetched.
 * @response {500} Internal Server Error - If there is a server error.
 */
async function getUser (req, res) {
  const userId = sanitize(req.params?.userId)

  if (!userId) return res.status(400).send('userId is required.')

  try {
    const users = client.db(config.database).collection(config.usersCollection)
    const user = await users.findOne({ _id: new ObjectId(userId) })

    if (!user) return res.status(404).send('user not found.')

    return res.status(200).send(user)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err.message)
  }
}

export {
  getUser
}
