const express = require('express');
const router = express.Router();
const { signUpValidation, loginValidation } = require('../helpers/validation');
const userController = require('../controllers/userController');

const { jwtAuthMiddleware } = require('../helpers/jwt');
require('dotenv').config();

//  validation middleware to the '/register' route
router.post('/register', signUpValidation, userController.register);
router.post('/login', loginValidation, userController.login);
router.get('/profile', jwtAuthMiddleware, userController.getProfile);

module.exports = router;
