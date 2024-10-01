const express = require('express');
const app = express();

app.use(express.json());

//Import All routes
const products = require('./routes/product');
//

app.use('/api/v1', products)

module.exports = app 