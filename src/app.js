import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header/header';
import Routes from './router';
import './shared/document/document.scss';

if(/http:\/\/(www\.)?github\.io/.test(window.location.href)) {
  window.location = "http://reactdesktop.js.org";
}

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(Routes, document.getElementById('main'));
