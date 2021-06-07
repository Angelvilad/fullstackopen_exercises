const supertest = require('supertest');
const mongoose = require('mongoose');

const {app, server} = require('../index.js');
const Blog = require('../models/blog.js');

const initialBlogs = [
    {
        title: 'Cocina ecológica',
        author: 'Pepe Mújica',
        url: 'url/cocina',
        likes: 20
    },
    {
        title: 'RealoVirtual',
        author: 'Jhon Carmack',
        url: 'url/rov',
        likes: 200
    },
    {
        title: 'RealoVirtual',
        author: 'Jhon Carmack',
        url: 'url/rov',
        likes: 200
    }
];

const api = supertest(app);

test('notes returned are in JSON and the amount of blogs is correct', async() => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-type', /application\/json/);
    
    expect(response.body).toHaveLength(initialBlogs.length);
});

test('the unique indetifier propertie of the blog post is named id ', async() => {
    const response = await api.get('/api/blogs');

    response.body.forEach(blog => expect(blog.id).toBeDefined());
});

test('making http post request creates a new blog post', async() => {
    const newBlog = {
        title: 'How to add a new blog',
        author: 'Jon Doe',
        url: 'url66',
        likes: 78
    };

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-type', /application\/json/)

    const response = await api.get('/api/blogs');

    const titles = response.body.map(blog => blog.title);

    expect(response.body).toHaveLength(initialBlogs.length + 1);
    expect(titles).toContain(newBlog.title);
});

afterAll(() => {
    server.close();
    mongoose.connection.close();
});

beforeEach(async () => {
    await Blog.deleteMany({});

    for( const item of initialBlogs) {
        const blog = new Blog(item);
        await blog.save();
    }
});