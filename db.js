const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizza_delivery', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
