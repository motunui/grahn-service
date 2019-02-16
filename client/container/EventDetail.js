import React, { Suspense, useState, useEffect } from 'react';

import Highlight from '../components/Highlights/Highlights';
import EventImage from '../components/EventImage/EventImage';

import { fetchFromDB } from '../utils/fetch';

const Guarantee = React.lazy(() => import('./Guarantee'));

const EventDetail = ({ location }) => {
  const [event, setEvent] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchFromDB('event/43', setEvent);
  }, []);

  const renderGuar = () => {
    setLoad(!load);
  };

  return (
    <>
      {event ? <EventImage imagePath={event.ImageUrl} /> : event}
      <hr />
      {event ? <Highlight highlight={event.Highlights} /> : event}
      <button onClick={renderGuar}>Button</button>
      {load ? (
        <Suspense fallback={<div>...loading</div>}>
          <Guarantee />
        </Suspense>
      ) : (
        load
      )}
    </>
  );
};

export default EventDetail;
