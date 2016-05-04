import React from 'react';
import Router, { Route, IndexRoute, Redirect } from 'react-router';
import { createHistory, useBasename } from 'history'
import Demo from './Demo/Demo';
import Docs from './Docs/Docs';

export const history = createHistory();

export default (
  <Router history={history}>
    <Redirect from="/" to="/" />
    <Route path="/" component={Docs}/>
    <Route path="/docs/" component={Docs}/>
    <Route path="/docs/*" component={Docs}/>
    <Route path="/demo/" component={Demo}/>
  </Router>
);
