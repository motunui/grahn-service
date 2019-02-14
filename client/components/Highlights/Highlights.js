import React from 'react';

const Highlight = ({ highlight }) => (
  <div>
    <p>HighLights</p>
    <ul>
      {highlight.map((hl, i) => {
        return <li key={i}>{hl.Text}</li>;
      })}
    </ul>
  </div>
);

export default Highlight;
