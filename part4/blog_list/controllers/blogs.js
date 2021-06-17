const blogsRouter = require('express').Router();
const Blog = require('../models/blog.js');

blogsRouter.get('/', async (request, response, next) => {
  try {
    const blogs = await Blog.find({});

    response.json(blogs);
  } catch (error){
    next(error);
  }
  
});

blogsRouter.delete('/:id', async (request, response, next) => {
  const {id} = request.params;

  try {
    await Blog.findByIdAndRemove(id)
    response.status(204).end();  
  } catch(error) {
    next(error);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  const blog = new Blog(request.body)

  try {
    const result = await blog.save();

    response.status(201).json(result);
  } catch (error) {
    next(error);
  }
  
});

blogsRouter.put('/:id', async (request, response, next) => {
  const {id} = request.params;
  const requestedBlogDataToUpdate = request.body;

  /*const blogDataToUpdate = {
    likes: requestedBlogDataToUpdate.likes
  };*/

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, requestedBlogDataToUpdate, {new: true});

    response.status(200).json(updatedBlog);
  } catch(error) {
    next(error);
  }

});

module.exports = blogsRouter;