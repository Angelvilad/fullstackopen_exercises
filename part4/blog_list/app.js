const config = require('./utils/config.js');
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');

const logger = require('./utils/logger.js');
const blogsRouter = require('./controllers/blogs.js');

logger.info('connecting to ', config.MONGO_DB_URI);

mongoose.connect(config.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB: ', error.message);
  })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter);

module.exports = app;