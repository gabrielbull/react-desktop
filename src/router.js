import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Demo from './demo/demo';
import Docs from './docs/docs';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Docs}/>
    <Route path="/docs/" component={Docs}/>
    <Route path="/docs/*" component={Docs}/>
    <Route path="/demo/" component={Demo}/>
  </Router>
);
