const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader);
  if (typeof bearerHeader !== 'undefined') {
    // console.log('inside if');
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    req.token = token;
    // console.log(token);
    next();
  } else {
    return res.status(404).json({
      message: 'Invalid token',
    });
  }
};

module.exports = { verifyToken };
