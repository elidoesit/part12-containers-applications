const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const { MONGO_URL } = require('../util/config');

if (MONGO_URL && !mongoose.connection.readyState) {
  console.log(`Attempting to connect to MongoDB with URI: ${MONGO_URL}`);
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Successfully connected to MongoDB');
    })
    .catch(error => {
      console.error(`Error connecting to MongoDB: ${error.message}`);
    });
}

module.exports = {
  Todo
};