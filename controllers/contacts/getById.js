const { contact } = require('../../models/contact');
const RequestError = require('../../helpers');

const getById = async (req, res) => {
  const { contactId } = req.params;
  // const data = await contact.findOne({ _id: contactId });
  const data = await contact.findById(contactId);
  if (!data) {
    throw RequestError(404, 'Not Found');
    // return res.status(404).json({ message: 'Not found' });
  }
  res.json(data);
};

module.exports = getById;
