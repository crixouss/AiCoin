const mongoose = require('mongoose');
require('../models/User')

async function configDatabase() {
    const connectionString = 'mongodb://localhost:27017/coin-analyze';
    await mongoose.connect(connectionString);
    console.log('Database Connected!');
}

module.exports =  {configDatabase};