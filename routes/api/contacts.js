const express = require('express');

const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put(
  '/:contactId',
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.uppdateById)
);

router.delete('/:contactId', ctrlWrapper(ctrl.revome));

module.exports = router;
