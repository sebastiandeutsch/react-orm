import React from 'react';
import { match, Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';

import Layout from 'containers/Layout';
import Help from 'containers/routes/Help';
import Hello from 'containers/routes/Hello';

import StoreLoader from 'loaders/StoreLoader';

import ApplicationStyles from './App.sass';
import ResetStyles from './Reset.css';

let routes = <Route path='/' component={Layout}>
  <IndexRoute component={Hello} />
  <Route path='help' component={Help}>
    <Route path=":id" component={Help} />
  </Route>
</Route>;

/**
 * App React Component
 */
export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    )
  }
}
