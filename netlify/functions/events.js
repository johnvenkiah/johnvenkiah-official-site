const { google } = require('googleapis');
require('dotenv').config();

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.CALENDAR_ID;

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
};
