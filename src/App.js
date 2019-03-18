import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>{Routes}</Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
