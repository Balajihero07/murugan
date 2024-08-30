const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');
const authMiddleware = require('../middleware/authmiddleware');

// User Registration
router.post('/register', authController.registerFromURL);

// User Login
router.post('https://murugan-14q1.onrender.com/login', authController.login);

// Create Wedding Order (Protected Route)
router.post('https://murugan-14q1.onrender.com/weddorder', authMiddleware, authController.createWeddingOrder);
//CREATE ABIRTHDAY ORDER
router.post('/brithdayorder', authMiddleware, authController.createbrithdayOrder);
//CREATE A HOUSE ORDER
router.post('/houseorder', authMiddleware, authController.createhouseOrder);
//CREATE A BABYSHOWR ORDER
router.post('/babyshowerorder', authMiddleware, authController.createbabyshowerOrder);
//CREATE FESTIVAL ORDER
router.post('/festivalorder', authMiddleware, authController.createfestivalOrder);
//CREATE PARTY ORDER
router.post('/partyorder', authMiddleware, authController.createpartyOrder);


// Get User Details and Orders (Protected Route)
router.get('/user-details', authMiddleware, authController.getUserAndOrderDetails);
// Update Wedding Order (Protected Route)
router.put('/weddorder/:orderId', authMiddleware, authController.updateWeddingOrder); 
//update brithday order 
router.put('/brithdayorder/:orderId', authMiddleware, authController.updatebrithdayOrder); 
//update house order
router.put('/houseorder/:orderId', authMiddleware, authController.updatehouseOrder); 
//update babyshower order
router.put('/babyshowerorder/:orderId', authMiddleware, authController.updatebabyshowerOrder); 
//update festival order
router.put('/festivalorder/:orderId', authMiddleware, authController.updatefestivalOrder);
//update party order
router.put('/partyorder/:orderId', authMiddleware, authController.updatepartyOrder);

// Delete Wedding Order (Protected Route)
router.delete('/weddorder/:orderId', authMiddleware, authController.deleteWeddingOrder);
//delete brithday order
router.delete('/brithdayorder/:orderId', authMiddleware, authController.deletebrithdayOrder);
//DELETE THE HOUSE ORDER
router.delete('/houseorder/:orderId', authMiddleware, authController.deletehouseOrder);
//delete the babyshowr order
router.delete('/babyshowerorder/:orderId', authMiddleware, authController.deletebabyshowerOrder);
//delete festival order
router.delete('/festivalorder/:orderId', authMiddleware, authController.deletefestivalOrder);
//delete party order
router.delete('/partyorder/:orderId', authMiddleware, authController.deletepartyOrder);






module.exports = router;
