import React, { useState } from 'react';

import cls from './Highlights.css';

const Highlight = ({ highlights }) => {
  const [load, setLoad] = useState(false);
  let display = true;

  const more = () => {
    setLoad(!load);
  };

  return (
    <div className={cls.overview_wrapper}>
      <div className="section">
        <div className={cls.section_header}>Highlights</div>
        <div className={cls.subsection}>
          <ul>
            {highlights.map((hl, i) => {
              if (i > 2 && !load) display = false;
              return (
                <li className={cls[`bullet_${display}`]} key={i}>
                  {hl.Text}
                </li>
              );
            })}
          </ul>
          {!load && highlights.length > 3 ? (
            <div>
              <span className={cls.more} onClick={more}>
                More
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
