import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import configureStore from './configureStore';
import Svg from './components/Svg';
import logoSvg from './svg/logo.svg';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Svg source={logoSvg} />
      </Provider>
    );
  }
}

export default App;
