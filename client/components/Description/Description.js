import React from 'react';

import Hightlight from '../Highlights/Highlights';
import Guarantee from '../../container/Guarantee/Guarantee';
import Social from '../Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Description.css';

const removePeriod = (string) => {
  return string
    .split('')
    .filter((l) => l !== '.')
    .join('');
};

export default ({ product }) => {
  return (
    // <>
    <div className={classes.product_module}>
      <Social fa="share" title="Share" />
      <Social fa="bookmark" title="Save" />
      <h1 className={classes.ui_header}>
        {removePeriod(product.Description)}: {product.Name}{' '}
        {product.Location.Name}
      </h1>
      <div className={classes.product_wrapper}>
        <div className={classes.product_button}>
          <input
            type="button"
            value="Check Availability"
            className={[classes.button, classes.original, classes.large].join(
              ' '
            )}
          />
          <div className={classes.pricing}>
            <div className={classes.price}>
              <span className={classes.from}>
                From<span>${product.ListPrice / 100}</span>
              </span>
            </div>
            <div className={classes.guarantee}>
              <div className={classes.align}>
                <div id="apd_low_price">
                  <div className={classes.lowPriceGuarantee}>
                    <a className={classes.guarantee_link}>
                      Low Price Guarantee{' '}
                    </a>
                    <FontAwesomeIcon
                      icon="info-circle"
                      transform="shrink-3"
                      className={classes.info_circle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cancellation">
          <span className={classes.checkmark}>
            <FontAwesomeIcon icon="check" size="xs" />
          </span>
          <a>Free Cancellation up to 24 hours in advance</a>
        </div>
      </div>
      <Hightlight highlights={product.Highlights} />
    </div>
    // </>
  );
};
