const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true, unique: true },
    productName: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, requird: true }
});

module.exports = mongoose.model('Product', productSchema); 