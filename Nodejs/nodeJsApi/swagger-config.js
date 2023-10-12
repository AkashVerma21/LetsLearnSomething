const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'My MongoDB API',
      version: '1.0.0',
      description: 'API documentation for MongoDB CRUD operations',
    },
    basePath: '/api', // Your API base path
  },
  apis: ['routes/*.js'], // Path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
