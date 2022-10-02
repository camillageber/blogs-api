const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  
  const payload = { 
    id: newCategory.dataValues.id,
    name: newCategory.dataValues.name,
  };

  return payload;
};

const findAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  findAllCategories,
};