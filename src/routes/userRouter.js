const express = require('express');
const userController = require('../controllers/userController');
const validations = require('../middlewares/validationsMiddleware');

const routers = express.Router();

routers.post('/', validations.userValidation, userController.createUser);

module.exports = routers;