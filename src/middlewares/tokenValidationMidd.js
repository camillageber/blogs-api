const { validateToken } = require('../utils/JWT');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  const payload = await validateToken(token);
  
  if (!payload) {
      const err = new Error('Token not found');
      err.status = 401;
      throw err;
  }
  
  req.data = payload;

  next();
};

module.exports = {
  tokenValidation,
};