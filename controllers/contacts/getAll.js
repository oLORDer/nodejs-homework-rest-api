const { contact } = require('../../models/contact');

const getAll = async (req, res) => {
  const data = await contact.find();
  res.json(data);
};

module.exports = getAll;
