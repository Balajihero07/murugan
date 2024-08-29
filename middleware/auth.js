const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.authAdmin = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) { // Assuming `isAdmin` is a field in your User model
      return res.status(403).json({ msg: 'Admin access required' });
    }

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
