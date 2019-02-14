import React, { useState, useEffect } from 'react';
import classes from './EventImage.css';
import Axios from 'axios';

const eventImage = ({ imagePath }) => {
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   Axios.get()
  // })

  return (
    <div className={classes.EventImage}>
      <img src={imagePath} className={classes.EventImg} />
    </div>
  );
};

export default eventImage;
