import { sanitize } from '../utils.js'

async function getWorkouts (req, res) {
  const userId = sanitize(req.query?.userId)

  if (!userId) return res.status(400).send('userId is required.')

  return res.status(200).send('getWorkouts')
}

export {
  getWorkouts
}
