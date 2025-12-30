const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// CREATE
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// READ BY ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json([]);
        res.json([product]);   // always return array
    } catch {
        res.status(400).json([]);
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch {
        res.status(400).json({ message: 'Update failed' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch {
        res.status(400).json({ message: 'Delete failed' });
    }
});

module.exports = router;
