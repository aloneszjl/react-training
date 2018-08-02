import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import configureStore from './configureStore';
import Logo from './Logo';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Logo />
      </Provider>
    );
  }
}

export default App;
