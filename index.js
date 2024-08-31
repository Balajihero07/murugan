const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Connect to the Database
connectDB();

const corsOptions = {
  origin: 'https://muruganpress.netlify.app', // Your Netlify URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization,x-auth-token', // Add x-auth-token
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

app.get('/', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.redirect('/index.html');
});
// Get Order by ID
app.get('/api/auth/weddorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/api/auth/brithdayorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/api/auth/houseorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/api/auth/babyshowerorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/api/auth/festivalorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
app.get('/api/auth/partyorder/:id', async (req, res) => {
  const orderId = req.params.id;
  
  try {
    const order = await Order.findById(orderId); // Fetch the order using the Order model

    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
