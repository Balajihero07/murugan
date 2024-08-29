const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const auth = require('../middleware/auth');

// Get User Invitations (Protected Route)
router.get('/invitations', auth, userController.getUserInvitations);

// Create Invitation (Protected Route)
router.post('/invitations', auth, userController.createInvitation);

module.exports = router;
