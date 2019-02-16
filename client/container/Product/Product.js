import React, { Suspense, useState, useEffect } from 'react';

// import Highlight from '../../components/Highlights/Highlights';
import PhotoModule from '../../components/PhotoModule/PhotoModule';
import Description from '../../components/Description/Description';

import classes from './Product.css';
import { fetchFromDB } from '../../utils/fetch';

// const Guarantee = React.lazy(() => import('../Guarantee'));

const Product = ({ location }) => {
  const [product, setProduct] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchFromDB('event/43', setProduct);
  }, []);

  const renderGuar = () => {
    setLoad(!load);
  };

  return (
    <div className={classes.apd_header}>
      <>
        {product ? <PhotoModule imagePath={product.ImageUrl} /> : product}
        {product ? <Description product={product} /> : product}
        {/* {event ? (
          <Description location={event.Location.Name} type={event.Type} />
        ) : (
          event
        )}
        <button onClick={renderGuar}>Button</button>
        {load ? (
          <Suspense fallback={<div>...loading</div>}>
            <Guarantee />
          </Suspense>
        ) : (
          load
        )} */}
      </>
    </div>
  );
};

export default Product;
