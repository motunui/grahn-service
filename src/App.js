import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './App.css';
import Product from './container/Product/Product';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShare,
  faBookmark,
  faCheck,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(faShare, faBookmark, faCheck, faInfoCircle);

class App extends Component {
  render() {
    return (
      // <div className={classes.product_detail}>
      <div className={classes.product_detail_header}>
        <Route exact path="/:id" component={Product} />
      </div>
      // </div>
    );
  }
}

export default App;
