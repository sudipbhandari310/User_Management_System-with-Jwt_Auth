const express = require('express');
const router = express.Router();
const { signUpValidation } = require('../helpers/validation');
const userController = require('../controllers/userController');

// Apply the validation middleware to the '/register' route
router.post('/register', signUpValidation, userController.register);

module.exports = router;