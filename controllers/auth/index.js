const register = require('./register');
const login = require('./login');
const getCurent = require('./getCurent');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resendEmail = require('./resendEmail');

module.exports = {
  register,
  login,
  getCurent,
  logout,
  updateAvatar,
  verify,
  resendEmail,
};
