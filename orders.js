const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    try {
        const { name, pizza } = req.body;
        const order = new Order({ name, pizza });
        await order.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
});

module.exports = router;
