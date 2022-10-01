const Joi = require('joi');

const missingFields = 'Some required fields are missing';

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': missingFields,
        'string.empty': missingFields,
        'string.email': 'Invalid fields',
    }),
    password: Joi.string().required().messages({
        'any.required': missingFields,
        'string.empty': missingFields,
    }),
});

const loginValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8).messages({
      'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
      'any.required': missingFields,
      'string.empty': missingFields,
      'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().required().min(6).messages({
      'string.min': '"password" length must be at least 6 characters long',
      'any.required': missingFields,
      'string.empty': missingFields,
  }),
  image: Joi.string(),
});

const userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  loginValidation,
  userValidation,
};