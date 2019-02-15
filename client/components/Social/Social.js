import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Social.css';

const shareAfter = (fa) => {
  if (fa === 'bookmark') {
    return <div className={[classes.float_wrapper, fa].join(' ')} />;
  }
};

export default ({ fa, title }) => (
  <>
    <div className={[classes.float_wrapper, fa].join(' ')}>
      <div className={classes.public_size}>
        <span>
          <span className={classes.public_fa}>
            <FontAwesomeIcon icon={fa} />
          </span>
          <span className={classes.public_cta}>{title}</span>
        </span>
      </div>
    </div>
  </>
);
