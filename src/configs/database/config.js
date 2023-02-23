require ('dotenv').config();
module.exports = {
  port: process.env.DATABASE_PORT || 3000,
  host: process.env.DATABASE_HOST || 'localhost',
  database: process.env.DATABASE_NAME || 'database',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'password',
  dialect: process.env.DATABASE_DIALECT || 'mysql',
  logging: process.env.DATABASE_LOGGING || false,
  force: process.env.DATABASE_FORCE || false,
  timezone: process.env.DATABASE_TIMEZONE || 'Indonesia/Jakarta',
}