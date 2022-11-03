const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post('save', handleSaveErrors);

const message = {
  'string.base': `"a" should be a type of 'text'`,
  'string.empty': `missing required name field`,
  'string.min': `"a" should have a minimum length of {#limit}`,
  'any.required': `missing fields`,
};

const addSchema = Joi.object({
  name: Joi.string().required().messages(message),
  email: Joi.string().required().messages(message),
  phone: Joi.string().required().messages(message),
  favorite: Joi.boolean().messages(message),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages(message),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const contact = model('contact', contactSchema);

module.exports = { contact, schemas };
