const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const token = await userService.createUser(req.body);
        
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
};