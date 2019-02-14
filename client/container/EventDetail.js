import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Highlight from './Highlights';

const EventDetail = (props) => {
  const [events, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [highlights, setHighLights] = useState([]);
  // const [guarantee, setguarantee] = useState('');
  // const [location, setLocation] = useState([]);

  useEffect(() => {
    Axios.get('/api/event/43').then(({ data }) => {
      console.log(data);
      setEvent(data.Name);
      setDescription(data.Description);
      setHighLights(data.Highlights);
    });
  }, []);

  return (
    <>
      <ul>{events}</ul>
      <Highlight highlight={highlights} />
    </>
  );
};

export default EventDetail;
