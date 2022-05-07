const mongoose = require('mongoose');

const AcronymSchema = mongoose.Schema({
  acronym: String,
  definition: String
});

module.exports = mongoose.model('Acronym', AcronymSchema);