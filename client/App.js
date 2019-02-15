import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

library.add(faShare, faBookmark);

import classes from './App.css';
import asyncComponent from './hoc/asyncComponent';

import Product from './container/Product/Product';

const AsyncPizza = asyncComponent(() => {
  return import('./container/Pizza.js');
});

class App extends Component {
  render() {
    return (
      <div className={classes.product_detail}>
        <div>
          <Link to={'/'}>Detail</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <div className={classes.product_detail_header}>
          <Route path="/" exact component={Product} />
          <Route path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
