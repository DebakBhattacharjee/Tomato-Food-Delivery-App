const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  price: String,
  img: String
});

module.exports = mongoose.model('Product', productSchema);