const JWT = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Access token is required' });
  }

  try {
    const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded; 

    next(); 
  } catch (error) {
    return res.status(403).json({ error: 'Forbidden: Invalid access token' });
  }
};

module.exports = authenticateJWT;