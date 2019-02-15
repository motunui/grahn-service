import React from 'react';
import classes from './Description.css';

export default ({ location, type }) => {
  return (
    <h1>
      {type}: {location}
    </h1>
  );
};
