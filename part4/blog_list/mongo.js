const mongoose = require('mongoose');

const config = require('./utils/config.js');
const logger = require('./utils/logger');

const {NODE_ENV, MONGO_DB_URI, MONGO_DB_URI_TEST} = config;

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI;

logger.info('connecting to ', config.MONGO_DB_URI);

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB: ', error.message);
  });