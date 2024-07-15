const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js'); 
const router = express.Router();
const port = 3000;
// password: fooddelivery2024
// username: Food-delivery-app-debak-tanmay




// mongoose.connect('mongodb+srv://<username>:fooddelivery2024@cluster0.rb9shhw.mongodb.net/Food-delivery-app-debak-tanmay?retryWrites=true&w=majority&appName=Cluster0').then(() => {
//   console.log('Connected to MongoDB Atlas');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB Atlas', err);
// });


// db connection
connectDB();


app.get('/', (req, res) => {
  res.send('Hello, this message is displayed on localhost!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});