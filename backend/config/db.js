const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://Food-delivery-app-debak-tanmay:fooddelivery2024@cluster0.rb9shhw.mongodb.net/Food-delivery-app-debak-tanmay").then(console.log("DB connected"));
}

module.exports = connectDB;