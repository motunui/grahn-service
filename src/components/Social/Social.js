import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cls from './Social.css';

const shareAfter = (fa) => {
  if (fa === 'bookmark') {
    return <div className={[cls.float_wrapper, fa].join(' ')} />;
  }
};

export default ({ fa, title }) => (
  <>
    <div className={[cls.float_wrapper, cls[`${fa}`]].join(' ')}>
      <div className={[cls.public_size, cls[`push_${fa}`]].join(' ')}>
        <span>
          <FontAwesomeIcon
            icon={fa}
            transform="shrink-4"
            className={cls.public_fa}
          />
          <span className={cls.public_cta}>{title}</span>
        </span>
      </div>
    </div>
  </>
);
