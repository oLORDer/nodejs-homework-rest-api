const contacts = require('../../models/contacts');

const getAll = async (req, res) => {
  const data = await contacts.listContacts();
  res.json(data);
};

module.exports = getAll;
