import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar, PushButton, TextField, Toolbar, Box } from '../src/Main';

ReactDOM.render(
  (
    <div>
      <TitleBar title="Page" controls={true}/>
      <TitleBar title="TitleBar with Toolbar" controls={true} className="no-margin-bottom">
        <Toolbar/>
      </TitleBar>

      <div className="window">
        <Box>
          <TextField style={{width: '160px'}} defaultValue="" placeholder="Username"/>
          <PushButton>Cancel</PushButton>
          <PushButton color="blue">Submit</PushButton>
        </Box>
      </div>
    </div>
  ),
  document.getElementById('main')
);
