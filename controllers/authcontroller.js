const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');
const Order = require('../models/order');

dotenv.config();

// Register a new user
exports.registerFromURL = async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!username || !email || !name || !password) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      username,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login a user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Fetch user details and wedding orders
exports.getUserAndOrderDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const orders = await Order.find({ user: req.user.id });
    res.json({ user, orders });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create a new wedding order
exports.createWeddingOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, bridename, times, groomname } = req.body;

  if (!title || !venue || !bridename) {
    return res.status(400).json({ msg: 'Title, venue, and bride name are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
      bridename,
      groomname,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
exports.createbrithdayOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, brithdayname, times, } = req.body;

  if (!title || !venue || !brithdayname) {
    return res.status(400).json({ msg: 'Title, venue, and brithday name are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      brithdayname,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

//create houseorder
exports.createhouseOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, housename, times, } = req.body;

  if (!title || !venue || !housename) {
    return res.status(400).json({ msg: 'Title, venue, and house name are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      housename,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//create babyshowerorder
exports.createbabyshowerOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, babyshowername, times, } = req.body;

  if (!title || !venue || !babyshowername) {
    return res.status(400).json({ msg: 'Title, venue, and babyshowername are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      babyshowername,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//create festival order
exports.createfestivalOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, festivalname, times, } = req.body;

  if (!title || !venue || !festivalname) {
    return res.status(400).json({ msg: 'Title, venue, and festivalname are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      festivalname,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//create party order
exports.createpartyOrder = async (req, res) => {
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, partyname, times, } = req.body;

  if (!title || !venue || !partyname) {
    return res.status(400).json({ msg: 'Title, venue, and partyname are required' });
  }

  try {
    const order = new Order({
      user: req.user.id,
      title,
      partyname,
      venue,
      additionalinformation,
      noofcard,
      mobileno,
      inputcardno,
      date,
      times,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
// Fetch a specific wedding order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order || order.user.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update a wedding order
exports.updateWeddingOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, bridename, times, groomname } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, bridename, times, groomname },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//update brithday order
exports.updatebrithdayOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times, brithdayname } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times,brithdayname },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//update house order
exports.updatehouseOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times, housename } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times,housename },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//update babyshower order
exports.updatebabyshowerOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times, babyshowername } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times,babyshowername },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//update festival order
exports.updatefestivalOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times, festivalname } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times,festivalname },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//update party order
exports.updatepartyOrder = async (req, res) => {
  const { orderId } = req.params;
  const { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times, partyname } = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { _id: orderId, user: req.user.id },
      { title, venue, additionalinformation, noofcard, mobileno, inputcardno, date, times,partyname },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
// Delete a wedding order
exports.deleteWeddingOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//delete Brithday order
exports.deletebrithdayOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//delete house order
exports.deletehouseOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//delete babyshower
exports.deletebabyshowerOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//delete festival order
exports.deletefestivalOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
//delete party order 
exports.deletepartyOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findOneAndDelete({ _id: orderId, user: req.user.id });

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json({ msg: 'Order deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};