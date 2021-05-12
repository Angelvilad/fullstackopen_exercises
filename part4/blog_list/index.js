const app = require('./app.js');
const http = require('http');
const config = require('./utils/config.js');
const logger = require('./utils/logger.js');

const server = http.createServer(app);

const port = config.PORT || 3003;
server.listen(port, () => {
  logger.info(`Server running on portaaaa ${port}`)
});