'use strict'

import mongodb, { ObjectId } from 'mongodb'

import config from './config.js'

const { MongoClient } = mongodb
const client = new MongoClient(config.mongoDBUri)

export { client, ObjectId }
