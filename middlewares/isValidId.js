const { isValidObjectId } = require('mongoose');
const { RequestError } = require('../helpers');

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(RequestError(400, `${id} is not valid`));
  }
  next();
};

module.exports = isValidId;
