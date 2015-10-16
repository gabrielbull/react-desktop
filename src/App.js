import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import Header from './Header';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Demo/>, document.getElementById('main'));
