import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextInput,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateProgressWheel,
  Form,
  Label,
  Window,
  Desktop
} from '../src/index';
import {Window1, Window2} from './playground.win';

document.title = 'React Desktop Playground';
document.body.style.padding = '30px 40px';
document.body.style.background = 'white';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

document.body.innerHTML = `
  <div id="window1" style="width: 600px;"></div>
  <div id="window2" style="width: 600px;"></div>
  <script src="/.js"></script>
`;

ReactDOM.render(<Window1/>, document.getElementById('window1'));
ReactDOM.render(<Window2/>, document.getElementById('window2'));
