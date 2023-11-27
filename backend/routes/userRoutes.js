const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user routes
router.get('/buses', userController.getAllBuses);
router.get('/search-buses', userController.searchBuses);

module.exports = router;
