import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';

import Nav from 'Common/nav';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>{Routes}</Switch>
          <Nav />
        </Router>
      </Provider>
    );
  }
}
export default App;
