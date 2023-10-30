// jwtMiddleware.js

const jwt = require('jsonwebtoken');

// Secret key for JWT
const secretKey = 'your-secret-key';

// Generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Verify JWT token
export async function verifyToken(req, res) {
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    throw new Error('Authorization failed');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
  } catch (error) {
    throw new Error('Authorization failed');
  }
}
module.exports = {
  generateToken,
  verifyToken,
};
