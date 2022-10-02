const express = require('express');
const categoryController = require('../controllers/categoryController');
const validations = require('../middlewares/validationsMiddleware');
const tokenValidation = require('../middlewares/tokenValidationMidd');

const routers = express.Router();

routers.post('/', 
tokenValidation.tokenValidation, validations.categoryValidation, categoryController.createCategory);

module.exports = routers;