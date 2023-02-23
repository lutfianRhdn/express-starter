require('dotenv').config();
const databaseConfig = require('./database/config');
module.exports = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'localhost',
  BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
  database: databaseConfig,
};
