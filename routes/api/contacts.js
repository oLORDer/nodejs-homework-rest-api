const express = require('express');
const Joi = require('joi');

const contacts = require('../../models/contacts');

const { RequestError } = require('../../helpers');

const router = express.Router();
const contactAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get('/', async (req, res, next) => {
  const data = await contacts.listContacts();
  res.json(data);
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const data = await contacts.getContactById(req.params.contactId);
    if (!data) {
      throw RequestError(404, 'Not Found');
      // return res.status(404).json({ message: 'Not found' });
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactAddSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw RequestError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw RequestError(404);
    }

    // res.status(204).send();
    res.json({
      message: 'Delete success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
