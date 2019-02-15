import React from 'react';

import classes from './Highlights.css';

const Highlight = ({ highlights }) => (
  <div className={classes.overview_wrapper}>
    <div className={classes.section_header}>Highlights</div>
    <div className={classes.subsection}>
      <ul>
        {highlights.map((hl, i) => {
          return <li key={i}>{hl.Text}</li>;
        })}
      </ul>
      <div className={classes.show_more}>More</div>
    </div>
  </div>
);

export default Highlight;
