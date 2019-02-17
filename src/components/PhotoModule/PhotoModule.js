import React from 'react';
import classes from './PhotoModule.css';

export default ({ imagePath }) => {
  return (
    <div className={classes.photo_module}>
      <div className={classes.perma}>
        <div className={classes.carouselPhoto}>
          <img src={imagePath} />
        </div>
      </div>
    </div>
  );
};
