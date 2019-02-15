import React from 'react';

import classes from './Highlights.css';

const Highlight = ({ highlight }) => (
  <div className={classes.product_highlight_module}>
    <p>HighLights</p>
    <ul>
      {highlight.map((hl, i) => {
        return <li key={i}>{hl.Text}</li>;
      })}
    </ul>
  </div>
);

export default Highlight;
