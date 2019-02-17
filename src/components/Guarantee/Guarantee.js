import React from 'react';
import cls from './Guarantee.css';

const guaranteeComponent = ({ body, onClose }) => {
  return (
    <>
      <span className={[cls.ui_modal, cls.modal].join(' ')}>
        <div className={cls.body_text}>
          <div className={cls.guarantee_overlay}>
            <div className="message">
              {body.split(`\n \r`).map((para, i) => {
                return <p key={i}>{para}</p>;
              })}
            </div>
            <div className="tap_logo">
              <img src="https://static.tacdn.com/img2/attractions/viator/viator_logo_20.png" />
              <div className="tap_company">A TripAdvisor company</div>
            </div>
          </div>
        </div>
        <div className={cls.ui_close_x} onClick={onClose} />
      </span>
    </>
  );
};

export default guaranteeComponent;
