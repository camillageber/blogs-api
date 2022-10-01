const loginService = require('../services/loginService');

const loginValidated = async (req, res, next) => {
  console.log('entrou controller');
  try {
    const token = await loginService.authentication(req.body);
     return res.status(200).json({ token });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  loginValidated,
};