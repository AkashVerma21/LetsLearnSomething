const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MongoDB CRUD API with Swagger',
      version: '1.0.0',
      description: 'API for performing CRUD operations on MongoDB',
    },
    servers:[
      {
        url:'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js'], // Specify the path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
