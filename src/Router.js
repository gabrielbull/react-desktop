import React from 'react';
import Router, { Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history'
import Demo from './Demo/Demo';
import Docs from './Docs/Docs';

export const history = createHistory();

export default (
  <Router history={history}>
    <Route path="/react-desktop/" component={Docs}/>
    <Route path="/react-desktop/demo" component={Demo}/>
  </Router>
);
