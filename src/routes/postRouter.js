const express = require('express');
const postController = require('../controllers/postController');
// const validations = require('../middlewares/validationsMiddleware');
const tokenValidation = require('../middlewares/tokenValidationMidd');

const routers = express.Router();

// routers.post('/', 
// tokenValidation.tokenValidation, postController.createPost);

routers.get('/', tokenValidation.tokenValidation, postController.findAllPosts);
routers.get('/:id', tokenValidation.tokenValidation, postController.findPostById);

module.exports = routers;
