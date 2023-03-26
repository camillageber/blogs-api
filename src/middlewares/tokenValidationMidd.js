const { validateToken } = require('../utils/JWT');

const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
     
    if (!token) {
    return res.status(401).json({ message: 'Token not found' });
    }
    
    const payload = await validateToken(token);
    req.data = payload;

    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};