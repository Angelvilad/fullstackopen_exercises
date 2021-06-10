const express = require('express');
const app = express();
const cors = require('cors');

const handleErrors = require('./middlewares/handleErrors.js');

const blogsRouter = require('./controllers/blogs.js');

require('./mongo');

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

app.use(handleErrors);

module.exports = app;