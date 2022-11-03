const { contact } = require('../../models/contacts');
const { RequestError } = require('../../helpers');

const uppdateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contact.updateContact(contactId, req.body);
  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = uppdateById;
