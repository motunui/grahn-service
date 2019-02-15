import React, { Suspense, useState, useEffect } from 'react';

import Highlight from '../../components/Highlights/Highlights';
import PhotoModule from '../../components/PhotoModule/PhotoModule';
import Description from '../../components/Description/Description';

import classes from './Product.css';
import { fetchFromDB } from '../../utils/fetch';

const Guarantee = React.lazy(() => import('../Guarantee'));

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
    <div className={classes.apd_header}>
      <>
        {event ? <PhotoModule imagePath={event.ImageUrl} /> : event}
        {event ? <Highlight highlight={event.Highlights} /> : event}
        {/* {event ? (
          <Description location={event.Location.Name} type={event.Type} />
        ) : (
          event
        )}
        <button onClick={renderGuar}>Button</button>
        {load ? (
          <Suspense fallback={<div>...loading</div>}>
            <Guarantee />
          </Suspense>
        ) : (
          load
        )} */}
      </>
    </div>
  );
};

export default EventDetail;
