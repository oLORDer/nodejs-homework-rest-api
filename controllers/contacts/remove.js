const { contact } = require('../../models/contact');
const { RequestError } = require('../../helpers');

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await contact.findByIdAndRemove(contactId);
  if (!result) {
    throw RequestError(404);
  }

  // res.status(204).send();
  res.json({
    message: 'delete success',
  });
};

module.exports = remove;
