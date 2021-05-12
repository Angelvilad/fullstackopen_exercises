require('dotenv').config();
const defaultPort = 3003;

const PORT = process.env.PORT || defaultPort;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

module.exports = {
  MONGO_DB_URI,
  PORT
}