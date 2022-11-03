const { contact } = require('../../models/contacts');
const { RequestError } = require('../../helpers');

const revome = async (req, res) => {
  const { contactId } = req.params;
  const result = await contact.removeContact(contactId);
  if (!result) {
    throw RequestError(404);
  }

  // res.status(204).send();
  res.json({
    message: 'contact deleted',
  });
};

module.exports = revome;
