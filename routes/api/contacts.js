const express = require('express');

const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post(
  '/',
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.uppdateById)
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.remove));

module.exports = router;
