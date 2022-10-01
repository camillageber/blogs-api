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

module.exports = {
  loginValidation,
};