const express = require('express');
const userController = require('../controllers/userController');
const validations = require('../middlewares/validationsMiddleware');
const tokenValidation = require('../middlewares/tokenValidationMidd');

const routers = express.Router();

routers.post('/', validations.userValidation, userController.createUser);
routers.get('/', tokenValidation.tokenValidation, userController.findAllUsers);

module.exports = routers;