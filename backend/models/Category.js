const mongoose = require('mongoose');
const { Schema } = mongoose;


const categorySchema = new Schema({
  name: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

module.exports = mongoose.model('Category', categorySchema);