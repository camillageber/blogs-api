const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  
  const payload = { 
    id: newCategory.dataValues.id,
    name: newCategory.dataValues.name,
  };

  return payload;
};

module.exports = {
  createCategory,
};