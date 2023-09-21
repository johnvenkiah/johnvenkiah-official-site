import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { motion } from 'framer-motion';
import momentDurationFormatSetup from 'moment-duration-format';
import { useMediaQuery } from 'react-responsive';
import { Oval } from 'react-loading-icons';
import {
  Concerts,
  ListGroup,
  ListGroupLink,
  ListGroupP,
  EmptyOrLoading,
  EventSpan,
  EventSpanBold,
} from './Live.styled';
momentDurationFormatSetup(moment);

export default function Live() {
  const page = useLocation().pathname;
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
      fetch('/.netlify/functions/events?endpoint=events') // Update the URL
        // fetch('http://localhost:3001/events')
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
  let eventsList = [];
  if (events && events.length > 0) {
    eventsList = events.map(function (event) {
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
            <EventSpan>
              {moment(event.start.dateTime).format('D.M.Y')}
              {isDesktopOrLaptop && ' - '}
            </EventSpan>
            <EventSpanBold>{event.summary}</EventSpanBold>
            <EventSpan>{event.location}</EventSpan>
          </ListGroupLink>
        );
      } else {
        return (
          <ListGroupP key={event.id}>
            <EventSpan>
              {moment(event.start.dateTime).format('D/M-Y')}
              {isDesktopOrLaptop && ' - '}
            </EventSpan>
            <EventSpanBold>{event.summary}</EventSpanBold>
            <EventSpan>{event.location}</EventSpan>
          </ListGroupP>
        );
      }
    });
  }

  let emptyState = (
    <EmptyOrLoading>
      <h3>No gigs currently in my calendar.</h3>
      <p>
        This page is updated regularly so be sure to stop by again soon, or
        <Link to={'/contact'}>get in touch</Link> if you have any queries.
      </p>
    </EmptyOrLoading>
  );

  let loadingState = (
    <EmptyOrLoading>
      <h4>
        Loading dates. This might take a few secs the first time you load the
        page.
      </h4>
      <Oval />
    </EmptyOrLoading>
  );
  let consertsStyle;
  if (page === '/live') {
    consertsStyle = {
      height: '75vh',
    };
  }

  return (
    <Concerts style={consertsStyle}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
        key={`live-component-${calState.isLoading}-${calState.events}-${calState.isEmpty}`}
      >
        <ListGroup>
          {calState.isLoading && loadingState}
          {page === '/live' && events && events.length > 0 && eventsList}
          {page === '/' &&
            events &&
            events.length > 0 &&
            eventsList.slice(0, 3)}
          {calState.isEmpty && emptyState}
        </ListGroup>
      </motion.div>
    </Concerts>
  );
}
