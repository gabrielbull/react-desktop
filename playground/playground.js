import React from 'react';
import ReactDOM from 'react-dom';
import { PushButton, TextField } from '../src/Main';

ReactDOM.render(
  (
    <div>
      <TextField style={{width: '160px'}} defaultValue="" placeholder="Username"/>
      <PushButton>Cancel</PushButton>
      <PushButton color="blue">Submit</PushButton>
    </div>
  ),
  document.getElementById('main')
);
