const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: `johnvenkiah.com - ${body.subject}`, // Subject line
      html: `
        <h3>Contact Request From ${body.name}</h3>
        <p><strong>From: </strong>${body.name} | ${body.email}</p>
        <p><strong>Subject: </strong>johnvenkiah.com - ${body.subject}</p>
        <h4>Message:</h4>
        <p>${body.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Something went wrong. Try again later',
      }),
    };
  }
};
