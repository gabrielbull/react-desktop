import React from 'react';
import ReactDOM from 'react-dom';
import Header from './shared/header/header';
import Routes from './router';
import './shared/document/document.scss';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(Routes, document.getElementById('main'));
