import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo/Demo';
import Header from './Shared/Header/Header';
import styles from './Shared/Document/Document.scss';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Demo/>, document.getElementById('main'));
