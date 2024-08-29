const Order = require('../models/order'); // Ensure this is correctly required

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
  console.log('User details:', req.user);
  if (req.user && req.user.isAdmin) {
    return next();
  } else {
    return res.status(403).json({ msg: 'Access denied: Admins only' });
  }
};

// Get all orders/invitations
const getAllInvitations = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', ['name', 'email']);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllInvitations, 
  isAdmin
};
