import React from 'react';

import Hightlight from '../Highlights/Highlights';
import Guarantee from '../../container/Guarantee/Guarantee';
import Social from '../Social/Social';

import classes from './Description.css';

export default ({ product }) => {
  return (
    // <>
    <div className={classes.product_module}>
      <Social fa="share" title="Share" />
      <Social fa="bookmark" title="Save" />
      <h1 className={classes.ui_header}>
        {product.Location.Name} {product.Name}: {product.Location.Name}
      </h1>
      <div className={classes.produc_wrapper}>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cancellation" />
      </div>
      <hr />
      <Hightlight highlights={product.Highlights} />
    </div>
    // </>
  );
};
