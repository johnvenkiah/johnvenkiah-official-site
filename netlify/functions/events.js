const { google } = require('googleapis');
const nodemailer = require('nodemailer');
require('dotenv').config();

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.CALENDAR_ID;

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
    httpMethod === 'GET' &&
    queryStringParameters &&
    queryStringParameters.endpoint === 'events'
  ) {
    try {
      const jwtClient = new google.auth.JWT(
        GOOGLE_CLIENT_EMAIL,
        null,
        GOOGLE_PRIVATE_KEY,
        SCOPES
      );

      const calendar = google.calendar({
        version: 'v3',
        project: GOOGLE_PROJECT_NUMBER,
        auth: jwtClient,
      });
      const { data } = await calendar.events.list({
        calendarId: GOOGLE_CALENDAR_ID,
        timeMin: new Date().toISOString(),
        maxResults: 10,
        fields: 'items(id,summary,description,location,start/dateTime)',
        singleEvents: true,
        orderBy: 'startTime',
      });
      return {
        statusCode: 200,
        body: JSON.stringify(data.items || 'No upcoming events found.'),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Server Error' }),
      };
    }
  }

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
