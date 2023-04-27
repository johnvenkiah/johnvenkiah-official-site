import { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
momentDurationFormatSetup(moment);

export default function Live() {
  const [calState, setCalState] = useState({
    time: moment().format('dd, Do MMMM, h:mm A'),
    events: [],
    isEmpty: false,
    isLoading: true,
  });

  useEffect(() => {
    // const startPolling = () => {
    //   setTimeout(() => {
    //     getEvents();
    //     startPolling();
    //   }, 60000);
    // };

    const getEvents = () => {
      fetch('http://localhost:3000/events')
        .then((response) => response.json())
        .then((data) => {
          let events = data;
          if (events.length > 0) {
            setCalState({
              events: events,
              isLoading: false,
              isEmpty: false,
            });
          } else {
            setCalState({
              isEmpty: true,
              isLoading: false,
            });
          }
        })
        .catch((error) => {
          console.error('This is the error: ', error);
        });
    };
    getEvents();
  }, []);

  const { events } = calState;
  let eventsList = events.map(function (event) {
    if (event.description) {
      let descr = event.description;
      descr = descr.slice(descr.lastIndexOf('https:'));
      descr = descr.replace('</u>', '');
      descr = descr.replace('</a>', '');

      return (
        <div key={event.id}>
          <a
            className="list-group-item"
            href={descr}
            target="_blank"
            rel="noreferrer"
          >
            <span className="date">
              {moment(event.start.dateTime).format('D/M-Y')}
              {' - '}
            </span>
            <span className="location">{event.location}</span>
          </a>
        </div>
      );
    } else {
      return (
        <p className="list-group-item" key={event.id}>
          <span className="date">
            {moment(event.start.dateTime).format('D/M-Y')}
            {' - '}
          </span>
          <span className="location">{event.location}</span>
        </p>
      );
    }
  });

  let emptyState = (
    <div className="empty">
      <h3>No gigs currently in our calendar.</h3>
      <p>
        We are updating it continuously, so it may currently be under
        maintenance. Please contact us if you have any queries!
      </p>
    </div>
  );

  let loadingState = (
    <div className="loading">
      <h4>Loading dates...</h4>
    </div>
  );

  return (
    <div className="container">
      <div className="concerts">
        <div className="list-group">
          {calState.isLoading && loadingState}
          {events.length > 0 && eventsList}
          {calState.isEmpty && emptyState}
        </div>
      </div>
    </div>
  );
}
