const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const token = await userService.createUser(req.body);
        
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const users = await userService.findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  findAllUsers,
};