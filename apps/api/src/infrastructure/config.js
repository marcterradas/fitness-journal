export default {
  port: 3000,
  database: process.env.DATABASE_NAME,
  environment: process.env.NODE_ENV,
  mongoDBUri: process.env.MONGO_URI,
  testUserUsername: process.env.TEST_USER_USERNAME,
  testUserPassword: process.env.TEST_USER_PASSWORD,
  usersCollection: 'users'
}
