import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <header>
            <h1>
              Redux-saga gallery
            </h1>
          </header>
        </>
      </Provider>
    );
  }
}

export default App;
