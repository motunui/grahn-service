import React, { useState, useEffect } from 'react';

import Guarantee from '../components/Guarantee/Guarantee';

import { fetchFromDB } from '../utils/fetch';

const guaranteeContainer = (props) => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    fetchFromDB('guarantee', setBody);
    console.log(body);
  }, []);

  return <>{body ? <Guarantee body={body.Body} /> : body}</>;
};

export default guaranteeContainer;
