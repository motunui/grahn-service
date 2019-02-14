import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Highlight from '../components/Highlights/Highlights';
import EventImage from '../components/EventImage/EventImage';

const EventDetail = ({ location }) => {
  const [event, setEvent] = useState(null);
  const [guarantee, setguarantee] = useState(null);
  // const [description, setDescription] = useState('');
  // const [highlights, setHighLights] = useState([]);
  // const [location, setLocation] = useState([]);

  useEffect(() => {
    fetchFromDB('event/43', setEvent);
  }, []);

  useEffect(() => {
    fetchFromDB('guarantee', setguarantee);
  }, []);

  const fetchFromDB = (path, cb) => {
    Axios.get(`/api/${path}`)
      .then(({ data }) => {
        console.log('TCL: fetchFromDB -> data', data);
        cb(data);
      })
      .catch((err) => {
        console.log('TCL: fetchFromDB -> err', err);
      });
  };

  return (
    <>
      {/* {event ? event.id : event}
      {guarantee ? guarantee.Body : guarantee} */}
      {event ? <EventImage imagePath={event.ImageUrl} /> : event}
      <hr />
      {event ? <Highlight highlight={event.Highlights} /> : event}
    </>
  );
};

export default EventDetail;
