require('dotenv').config();
const defaultPort = 3003;

const PORT = process.env.PORT || defaultPort;
const {MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV} = process.env;

module.exports = {
  MONGO_DB_URI,
  MONGO_DB_URI_TEST,
  PORT,
  NODE_ENV
}