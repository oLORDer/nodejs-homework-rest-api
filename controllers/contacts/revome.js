const contacts = require('../../models/contacts');
const RequestError = require('../../helpers');

const revome = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw RequestError(404);
  }

  // res.status(204).send();
  res.json({
    message: 'Delete success',
  });
};

module.exports = revome;
