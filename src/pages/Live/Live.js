import { useEffect, useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useMediaQuery } from 'react-responsive';
import {
  Concerts,
  ListGroup,
  ListGroupItem,
  Date,
  Location,
  ListGroupLink,
  ListGroupP,
  EmptyOrLoading,
} from './Live.styled';
momentDurationFormatSetup(moment);

export default function Live() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const [calState, setCalState] = useState({
    time: moment().format('dd, Do MMMM, h:mm A'),
    events: [],
    isEmpty: false,
    isLoading: true,
  });

  useEffect(() => {
    const getEvents = () => {
      fetch('http://localhost:3001/events')
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
        <ListGroupLink
          key={event.id}
          href={descr}
          target="_blank"
          rel="noreferrer"
        >
          <Date>
            {moment(event.start.dateTime).format('D.M.Y')}
            {isDesktopOrLaptop && ' - '}
          </Date>
          <Location>{event.location}</Location>
        </ListGroupLink>
      );
    } else {
      return (
        <ListGroupP key={event.id}>
          <Date>
            {moment(event.start.dateTime).format('D/M-Y')}
            {isDesktopOrLaptop && ' - '}
          </Date>
          <Location>{event.location}</Location>
        </ListGroupP>
      );
    }
  });

  let emptyState = (
    <EmptyOrLoading>
      <h3>No gigs currently in our calendar.</h3>
      <p>
        We are updating it continuously, so it may currently be under
        maintenance. Please contact us if you have any queries!
      </p>
    </EmptyOrLoading>
  );

  let loadingState = (
    <EmptyOrLoading>
      <h4>Loading dates...</h4>
    </EmptyOrLoading>
  );

  return (
    <Concerts>
      <ListGroup>
        {calState.isLoading && loadingState}
        {events.length > 0 && eventsList}
        {calState.isEmpty && emptyState}
      </ListGroup>
    </Concerts>
  );
}
