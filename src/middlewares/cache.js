const response = require("../utils/response")

module.exports = (prefix) => async (req, res, next) => {
  const redis = req.app.get('redis');
  const { id } = req.params;
  const data = JSON.parse(await redis.get(`${prefix}_${id}`));
  if (!data) return next();
  return response({ res, message: 'Successfuly Get All Data', data, code: 200 , is_from_cache: true})
}