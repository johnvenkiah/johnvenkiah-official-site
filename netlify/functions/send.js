const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.handler = async (event, context) => {
  const { httpMethod, queryStringParameters } = event;

  if (
    httpMethod === 'POST' &&
    queryStringParameters &&
    queryStringParameters.endpoint === 'send'
  ) {
    try {
      const requestData = JSON.parse(event.body);
      const mailOptions = {
        from: requestData.email, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: `johnvenkiah.com - ${requestData.subject}`, // Subject line
        html: `
          <h3>Contact Request From ${requestData.name}</h3>
          <p><strong>From: </strong>${requestData.name} | ${requestData.email}</p>
          <p><strong>Subject: </strong>johnvenkiah.com - ${requestData.subject}</li>
          <h4>Message:</h4>
          <p>${requestData.message}</p>
        `,
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          return {
            statusCode: 500,
            body: JSON.stringify({
              success: false,
              message: 'Something went wrong. Try again later',
            }),
          };
        } else {
          return {
            statusCode: 200,
            body: JSON.stringify({
              success: true,
              message: "Thanks for writing, I'll get back to you soon!",
            }),
          };
        }
      });
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Email sending failed' }),
      };
    }
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Not Found' }),
    };
  }
};
