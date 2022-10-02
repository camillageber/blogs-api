const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const name = await categoryService.createCategory(req.body);
    res.status(201).json(name);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createCategory,
};