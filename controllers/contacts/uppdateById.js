const { contact } = require('../../models/contact');
const { RequestError } = require('../../helpers');

const uppdateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = uppdateById;
