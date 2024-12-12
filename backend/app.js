const express = require('express');
const app = require('express')();
app.use(express.json());
const bcrypt = require('bcryptjs');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const router = express.Router();
const Product = require('./models/Products.js');
const Category = require('./models/Category.js'); 
const jwt = require('jsonwebtoken');
const cors = require('cors'); 


app.use(cors());
// proj name: Food-delivery-app-debak-tanmay
// userId: fooddelivery2024
// password: debaktanmayproj2024

//app.use(cors({
 // origin: 'tomato-food-delivery-app-eight.vercel.app', 
 // methods: ['GET', 'POST'], // Allow specific HTTP methods
  //credentials: true, // Allow credentials (cookies, etc.)
//}));


const User = require('./models/User');
const JWT_SECRET = '#RNBf]/Q=cs/HSKDYk5`:~-)j3{&c=o`}m4EZ?li\T<wlD&@mnu+nM8.ZuT9I?sW';

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
  console.log('Signup request received:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, phone, address });
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(201).json({ 
      user: {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address
      }, 
      token 
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request received:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: error.message });
  }
});


// Middleware to authenticate and get the user ID from the token
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from 'Authorization' header

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  try {
    // Verify the token and decode it
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId; // Attach userId to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Route to get user details
app.get('/get-user-details', authenticateUser, async (req, res) => {
  try {
    // Use the userId from the decoded token to find the user in the database
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user details
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});





// adding products and categories

// Create a product
// app.post('/products', async (req, res) => {
//   const { name, description, price, img } = req.body;
//   try {
//     const product = new Product({ name, description, price, img });
//     await product.save();
//     res.status(201).send(product);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Create a category and associate a product
// // app.post('/categories', async (req, res) => {
// //   const { name, productId } = req.body;
// //   try {
// //     // Check if productId exists
// //     const existingProduct = await Product.findById(mongoose.Types.ObjectId(productId));
// //     if (!existingProduct) {
// //       return res.status(404).send({ message: 'Product not found' });
// //     }

// //     // Create the category and associate the product
// //     const category = new Category({ name, products: [productId] });
// //     await category.save();

// //     res.status(201).send(category);
// //   } catch (error) {
// //     console.error('Error creating category:', error);
// //     res.status(400).send(error);
// //   }
// // });

// app.post('/categories', async (req, res) => {
//   const { name, productId } = req.body;

//   try {
//     // Check if productId exists
//     const existingProduct = await Product.findById(productId);
//     if (!existingProduct) {
//       return res.status(404).send({ message: 'Product not found' });
//     }

//     // Create the category and associate the product
//     const category = new Category({
//       name,
//       products: [new mongoose.Types.ObjectId(productId)] // Use new ObjectId here
//     });
//     await category.save();

//     res.status(201).send(category);
//   } catch (error) {
//     console.error('Error creating category:', error);
//     res.status(400).send(error);
//   }
// });





// // Fetch a category by ID and populate its products
// // app.post('/categories/fetch', async (req, res) => {
// //   const { id } = req.body; // Get ID from the request body
// //   try {
// //     const category = await Category.findById(id).populate('products');
// //     if (!category) {
// //       return res.status(404).send({ message: 'Category not found' });
// //     }
// //     res.send(category);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // });


// app.post('/categories/fetch-details', async (req, res) => {
//   const { id } = req.body;
//   console.log('Received ID:', id);

//   try {
//     // Find category with population
//     const category = await Category.findById(id).populate('products');
//     if (!category) {
//       console.log('Category not found for ID:', id);
//       return res.status(404).send({ message: 'Category not found' });
//     }

//     // Separate product details (optional)
//     const productDetails = category.products.map(product => ({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       img: product.img
//     }));

//     const response = {
//       category: category,
//       products: productDetails,
//     };

//     res.send(response);
//   } catch (error) {
//     console.error('Error fetching category details:', error);
//     res.status(500).send({ message: 'Internal server error' });
//   }
// });







app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
