import mongodb from 'mongodb'

import config from './config.js'

const { MongoClient } = mongodb
const client = new MongoClient(config.mongoDBUri)

export { client }
