const express = require('express');
const app = require('express')();
app.use(express.json());
const bcrypt = require('bcryptjs');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const router = express.Router();
const Product = require('./models/Products.js');
const Category = require('./models/Category.js'); 

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

// adding products and categories

// Create a product
app.post('/products', async (req, res) => {
  const { name, description, price, img } = req.body;
  try {
    const product = new Product({ name, description, price, img });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Create a category and associate a product
app.post('/categories', async (req, res) => {
  const { name, productId } = req.body;
  try {
    // Check if productId exists
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return res.status(404).send({ message: 'Product not found' });
    }

    // Create the category and associate the product
    const category = new Category({ name, products: [productId] });
    await category.save();

    res.status(201).send(category);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(400).send(error);
  }
});
// Fetch a category by ID and populate its products
app.post('/categories/fetch', async (req, res) => {
  const { id } = req.body; // Get ID from the request body
  try {
    const category = await Category.findById(id).populate('products');
    if (!category) {
      return res.status(404).send({ message: 'Category not found' });
    }
    res.send(category);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});