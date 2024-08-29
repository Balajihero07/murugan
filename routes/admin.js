const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const authMiddleware = require('../middleware/auth'); // Corrected path

// Route to get all orders (accessible only by admins)
router.get('/orders', authMiddleware.authAdmin, adminController.getAllInvitations);

module.exports = router;
