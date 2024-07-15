const express = require('express');
const app = require('express')();
app.use(express.json());
app.use(express.json());
const bcrypt = require('bcryptjs');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const router = express.Router();

// proj name: Food-delivery-app-debak-tanmay
// userId: fooddelivery2024
// password: debaktanmayproj2024


const User = require('./models/user');

// schema required: User(login, signup), admin(login, signup), category,


// mongodb atlas connection
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://fooddelivery2024:debaktanmayproj2024@cluster0.hj0hbke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("db connect"));

app.listen(3000,function(){
  console.log('listening on port');
});



// userSignup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password
    const newUser = new User({ name, email, password: hashedPassword, phone, address });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

