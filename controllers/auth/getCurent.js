const getCurent = async (req, res) => {
  const { email, name } = req.user;
  res.json({ email, name });
};

module.exports = getCurent;
