import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './container/Users';
import Event from './container/EventDetail';
import asyncComponent from './hoc/asyncComponent';
import Axios from 'axios';

const AsyncPizza = asyncComponent(() => {
  return import('./container/Pizza.js');
});

class App extends Component {
  state = {
    guarantee: null,
    event: null
  };

  // componentDidMount() {
  //   this.fetchGuar();
  //   this.fetchEvent();
  // }

  fetchGuar() {
    Axios.get('/api/guarantee')
      .then(({ data }) => {
        console.log('TCL: App -> fetchGuar -> data', data);
        this.setState({
          guarantee: data.body
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchEvent() {
    Axios.get('/api/event/45')
      .then(({ data }) => {
        console.log('TCL: fetchEvent -> data', data);
        this.setState({
          event: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Link
            to={{
              pathname: '/'
              // state: {
              //   guarantee: this.state.guarantee,
              //   event: this.state.event
              // }
            }}
          >
            Event
          </Link>{' '}
          | <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Event} />
          <Route path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
