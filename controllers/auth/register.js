const bcrypt = require('bcryptjs');

const { User } = require('../../models/user');

const { ReguestError } = require('../../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw ReguestError(409, 'Email in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ email, password: hashPassword });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: 'starter',
    },
  });
};

module.exports = { register };
