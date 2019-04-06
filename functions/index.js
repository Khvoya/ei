const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const express = require("express");

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

const APP_NAME = "Electric Indians";
const app = express();

app.post("/", (req, res) => {
  const {name, price, comment, email: emailAddress} = JSON.parse(req.body);
  const mail = `Request to purchase: 
    Item name: ${name} ${price},
    
    Contact data:
    
    Email address: ${emailAddress},
    Additional comment: ${comment || 'none'} 
    `;
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: gmailEmail,
    text: mail,
    subject: "New order request"
  };

  mailTransport
    .sendMail(mailOptions)
    .then(() => {
      return res.send({sent: true});
    })
    .catch(() => {
      return res.send({sent: false});
    });
});
exports.mailer = functions.https.onRequest(app);
