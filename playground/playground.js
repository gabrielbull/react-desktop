import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar, PushButton, TextField, Toolbar } from '../src/Main';

ReactDOM.render(
  (
    <div>
      <TitleBar title="Page" controls={true}/>
      <TitleBar controls={true} className="no-margin-bottom">
        <Toolbar/>
      </TitleBar>
      <div className="window">
        <TextField style={{width: '160px'}} defaultValue="" placeholder="Username"/>
        <PushButton>Cancel</PushButton>
        <PushButton color="blue">Submit</PushButton>
      </div>
    </div>
  ),
  document.getElementById('main')
);
