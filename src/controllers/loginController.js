const loginService = require('../services/loginService');

const loginValidated = async (req, res, next) => {
  try {
    const token = await loginService.authentication(req.body);
     return res.status(200).json(token);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  loginValidated,
};