// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Define routes for CRUD operations
app.use('/', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
