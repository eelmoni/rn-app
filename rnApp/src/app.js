import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './Router';

export default class rnApp extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
