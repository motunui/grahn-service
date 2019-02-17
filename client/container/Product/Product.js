import React, { useState, useEffect } from 'react';

import PhotoModule from '../../components/PhotoModule/PhotoModule';
import Description from '../../components/Description/Description';
import cls from './Product.css';

import { fetchFromDB } from '../../utils/fetch';

const Product = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchFromDB('event/19', setProduct);
  }, []);

  return (
    <div className={cls.apd_header}>
      {product ? <PhotoModule imagePath={product.ImageUrl} /> : product}
      {product ? <Description product={product} /> : product}
    </div>
  );
};

export default Product;
