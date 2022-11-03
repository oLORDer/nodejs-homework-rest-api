const { contact } = require('../../models/contact');

const addContact = async (req, res) => {
  const result = await contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
