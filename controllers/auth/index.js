const { register } = require('./register');
const { login } = require('./login');
const { getCurent } = require('./getCurent');
const { logout } = require('./logout');

module.exports = {
  register,
  login,
  getCurent,
  logout,
};
