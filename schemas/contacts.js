const Joi = require('joi');

const message = {
  'string.base': `"a" should be a type of 'text'`,
  'string.empty': `missing required name field`,
  'string.min': `"a" should have a minimum length of {#limit}`,
  'any.required': `"a" is a required field`,
};

const addSchema = Joi.object({
  name: Joi.string().required().messages(message),
  email: Joi.string().required().messages(message),
  phone: Joi.string().required().messages(message),
});

module.exports = {
  addSchema,
};
