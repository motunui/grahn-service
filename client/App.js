import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import classes from './App.css';
import Product from './container/Product/Product';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faShare, faBookmark);

class App extends Component {
  render() {
    return (
      <div className={classes.product_detail}>
        <div className={classes.product_detail_header}>
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
