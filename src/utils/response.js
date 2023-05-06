module.exports = async ({ res, message,is_from_cache, data, code }) => {
  return res
    .status(code)
    .json({
      code,
      status: code < 300 ? 'success' : 'error',
      message,
      from_cache: is_from_cache || false,
      data,
    })
    .end();
  
}