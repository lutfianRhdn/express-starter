const server = require('./server');
const logger = require('./utils/logger');

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

server.listen(port, () => {
  logger.info(`[Server] Listening on: http://${host}:${port}`);
});
