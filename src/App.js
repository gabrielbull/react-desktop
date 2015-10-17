import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Shared/Header/Header';
import Routes from './Router';
import styles from './Shared/Document/Document.scss';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(Routes, document.getElementById('main'));
