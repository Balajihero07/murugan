const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');
const authMiddleware = require('../middleware/authmiddleware');

// User Registration
router.post('/register', authController.registerFromURL);

// User Login
router.post('/login', authController.login);

// Create Orders (Protected Routes)
router.post('/weddorder', authMiddleware, authController.createWeddingOrder);
router.post('/brithdayorder', authMiddleware, authController.createbrithdayOrder);
router.post('/houseorder', authMiddleware, authController.createhouseOrder);
router.post('/babyshowerorder', authMiddleware, authController.createbabyshowerOrder);
router.post('/festivalorder', authMiddleware, authController.createfestivalOrder);
router.post('/partyorder', authMiddleware, authController.createpartyOrder);

// Update Orders (Protected Routes)
router.put('/weddorder/:orderId', authMiddleware, authController.updateWeddingOrder);
router.put('/brithdayorder/:orderId', authMiddleware, authController.updatebrithdayOrder);
router.put('/houseorder/:orderId', authMiddleware, authController.updatehouseOrder);
router.put('/babyshowerorder/:orderId', authMiddleware, authController.updatebabyshowerOrder);
router.put('/festivalorder/:orderId', authMiddleware, authController.updatefestivalOrder);
router.put('/partyorder/:orderId', authMiddleware, authController.updatepartyOrder);

// Delete Orders (Protected Routes)
router.delete('/weddorder/:orderId', authMiddleware, authController.deleteWeddingOrder);
router.delete('/brithdayorder/:orderId', authMiddleware, authController.deletebrithdayOrder);
router.delete('/houseorder/:orderId', authMiddleware, authController.deletehouseOrder);
router.delete('/babyshowerorder/:orderId', authMiddleware, authController.deletebabyshowerOrder);
router.delete('/festivalorder/:orderId', authMiddleware, authController.deletefestivalOrder);
router.delete('/partyorder/:orderId', authMiddleware, authController.deletepartyOrder);

// Get User Details and Orders (Protected Route)
router.get('/user-details', authMiddleware, authController.getUserAndOrderDetails);

module.exports = router;
