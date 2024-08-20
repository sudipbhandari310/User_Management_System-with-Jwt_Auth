const express = require('express');
const router = express.Router();
const { signUpValidation, loginValidation } = require('../helpers/validation');
const userController = require('../controllers/userController');
const { verifyToken } = require('../helpers/jwtAuth');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//  validation middleware to the '/register' route
router.post('/register', signUpValidation, userController.register);
router.post('/login', loginValidation, userController.login);
router.post('/admin-dashboard', verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
    if (err) {
      res.status(403).json({ message: 'Invalid Token!' });
    } else {
      res.json({
        message: 'Welcome to the admin dashboard',
        authData,
      });
    }
  });
});

module.exports = router;
