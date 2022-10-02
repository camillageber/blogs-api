const categoryService = require('../services/categoryService');

const createCategory = async (req, res, next) => {
  try {
    const name = await categoryService.createCategory(req.body);
    res.status(201).json(name);
  } catch (e) {
    next(e);
  }
};

const findAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryService.findAllCategories();
    res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};