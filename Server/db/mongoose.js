const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Steals the promises from node

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:270127/ex_db');

module.exports = mongoose;
