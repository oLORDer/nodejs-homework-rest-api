const { contact } = require('../../models/contact');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const data = await contact.find({ owner }, '-createAt -updateAt', {
    skip,
    limit: limit,
  });
  res.json(data);
};

module.exports = getAll;
