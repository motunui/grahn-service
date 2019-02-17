import React, { Suspense, useState } from 'react';

import Hightlight from '../Highlights/Highlights';
// import Guarantee from '../../container/Guarantee/Guarantee';
import Social from '../Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cls from './Description.css';

const Guarantee = React.lazy(() =>
  import('../../container/Guarantee/Guarantee')
);

const removePeriod = (string) => {
  return string
    .split('')
    .filter((l) => l !== '.')
    .join('');
};

export default ({ product }) => {
  const [load, setLoad] = useState(null);

  const renderGuar = () => {
    setLoad(!load);
  };

  return (
    <>
      <div className={cls.product_module}>
        <Social fa="share" title="Share" />
        <Social fa="bookmark" title="Save" />
        <h1 className={cls.ui_header}>
          {removePeriod(product.Description)}: {product.Name}{' '}
          {product.Location.Name}
        </h1>
        <div className={cls.product_wrapper}>
          <div className={cls.product_button_price}>
            <input
              type="button"
              value="Check Availability"
              className={[cls.button, cls.original, cls.large].join(' ')}
            />
            <div className={cls.pricing}>
              <div className={cls.price}>
                <span className={cls.from}>
                  From<span>${product.ListPrice / 100}</span>
                </span>
              </div>
              <div className={cls.guarantee}>
                <div className={cls.align} onClick={renderGuar}>
                  <div id="apd_low_price">
                    <div className={cls.low_price}>
                      <a className={cls.guarantee_link}>Low Price Guarantee </a>
                      <FontAwesomeIcon
                        icon="info-circle"
                        transform="shrink-3"
                        className={cls.info_circle}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.cancellation}>
            <span className={cls.checkmark}>
              <FontAwesomeIcon icon="check" size="xs" />
            </span>
            <a>Free Cancellation up to 24 hours in advance</a>
          </div>
        </div>
        <Hightlight highlights={product.Highlights} />
      </div>
      {load ? (
        <Suspense fallback={<div>...loading</div>}>
          <Guarantee onClose={renderGuar} />
        </Suspense>
      ) : (
        load
      )}
    </>
  );
};
