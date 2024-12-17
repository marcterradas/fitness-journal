import mongodb from 'mongodb'

const { MongoClient } = mongodb
const client = new MongoClient(process.env.MONGO_URI)

export { client }
