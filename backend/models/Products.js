const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductsSchema = new Schema({
    name: String,
    description: String,
    price: String,
    img: String
});

module.exports = mongoose.model('Products',ProductsSchema);