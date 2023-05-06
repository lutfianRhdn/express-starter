const redis = require('redis');
const config = require('../cache/config');
let redisClient;
(async () => {
  redisClient = redis.createClient({
    host: config.host,
    port: config.port,
  });
  await redisClient.connect()
  redisClient.on('connect', () => {
    console.log('Redis client connected');
  });
  redisClient.on('error', (err) => {
    console.log(`Something went wrong ${err}`);
  });
  
})()
module.exports = redisClient;
