

import React, {Component} from 'react';
import { Provider } from 'react-redux'; 

import Navigation from './components/Navigation';
import store from './store/index';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

