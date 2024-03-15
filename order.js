const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: String,
    pizza: String
});

module.exports = mongoose.model('Order', orderSchema);
