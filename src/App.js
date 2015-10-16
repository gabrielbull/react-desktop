import React from 'react';
import ReactDOM from 'react-dom';
import Window from './Window';
import Header from './Header';

ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Window/>, document.getElementById('main'));
