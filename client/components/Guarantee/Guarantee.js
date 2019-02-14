import React from 'react';
import classes from './Guarantee.css';

const guaranteeComponent = ({ body }) => {
  return (
    <>
      {body.split(`\n \r`).map((para, i) => {
        return <p key={i}>{para}</p>;
      })}
    </>
  );
};

export default guaranteeComponent;
