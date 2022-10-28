const contacts = require('../../models/contacts');
const RequestError = require('../../helpers');

const getById = async (req, res) => {
  const data = await contacts.getContactById(req.params.contactId);
  if (!data) {
    throw RequestError(404, 'Not Found');
    // return res.status(404).json({ message: 'Not found' });
  }
  res.json(data);
};

module.exports = getById;
