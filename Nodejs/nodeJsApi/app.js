const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger-config'); 

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongodbUri = 'mongodb://localhost:27017/books';
mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Mount API routes
app.use('/api', require('./routes/books'));

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
