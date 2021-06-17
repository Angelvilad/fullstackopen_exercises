const supertest = require('supertest');

const {app} = require('../index.js');

const api = supertest(app);

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

module.exports = {
    initialBlogs,
    api
}