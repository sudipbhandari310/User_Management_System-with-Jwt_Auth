const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtAuthMiddleware = (req, res, next) => {
  //extract token from request header
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
    });
  }
  try {
    //verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    //attach user information to request object
    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: 'Invalid token',
    });
  }
};

//function to generate token
const generateToken = (userData) => {
  return jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: '10min' });
};

module.exports = { jwtAuthMiddleware, generateToken };
