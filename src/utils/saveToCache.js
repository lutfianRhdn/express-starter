module.exports = async ({ redis, key, data }) => {
  return await redis.set(key, JSON.stringify(data), {
    EX:60*60*24
  });
}