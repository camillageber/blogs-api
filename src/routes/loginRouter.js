const express = require('express');
const loginController = require('../controllers/loginController');
const validations = require('../middlewares/validationsMiddleware');

const routers = express.Router();

routers.post('/', validations.loginValidation, loginController.loginValidated);

module.exports = routers;