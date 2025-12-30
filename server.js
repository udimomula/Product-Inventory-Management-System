const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/productroutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/InventoryManagement')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/products', routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
