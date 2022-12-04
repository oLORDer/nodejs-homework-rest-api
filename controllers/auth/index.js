const { register } = require('./register');
const { login } = require('./login');
const { getCurent } = require('./getCurent');
const { logout } = require('./logout');
const { updateAvatar } = require('./updateAvatar');

module.exports = {
  register,
  login,
  getCurent,
  logout,
  updateAvatar,
};
