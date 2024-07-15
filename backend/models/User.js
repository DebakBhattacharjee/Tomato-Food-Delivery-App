const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sellerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    phone: {
        type: String,
        required: true
    },
    licence: {
        type: String,
        unique: true,
        required: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number]
    }
});

module.exports = mongoose.model('Seller', sellerSchema);