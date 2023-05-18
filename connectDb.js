const mongoose = require('mongoose');

async function connectToDb(url){
    return await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = { connectToDb };