const nodemailer = require('nodemailer');
require('dotenv').config();

const { GMAIL_USER, GMAIL_PASS } = process.env;

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const mail = { ...data, from: 'andryushka137@gmail.com' };

  transport
    .sendMail(mail)
    .then(() => console.log('Email send success'))
    .catch((error) => console.log(error.message));
};

module.exports = sendMail;

// const sgMail = require('@sendgrid/mail');
// require('dotenv').config();

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendMail = async (data) => {
//   const mail = { ...data, from: 'justsendmeow@meta.ua' };
//   await sgMail.send(mail);
//   return true;
// };

// module.exports = sendMail;
