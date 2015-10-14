import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar, PushButton, TextField, Toolbar, Box, SegmentedControl } from '../src/Main';

ReactDOM.render(
  (
    <div>
      <TitleBar title="Page" controls={true}/>
      <TitleBar title="TitleBar with Toolbar" controls={true} className="no-margin-bottom">
        <Toolbar/>
      </TitleBar>

      <div className="window">
        <Box className="box">
          <SegmentedControl>
            <SegmentedControl.Item
              title="Login"
              selected={true}
              onPress={() => { console.log('select login'); } }
            >
              <TextField defaultValue="" placeholder="Username"/>

              <PushButton>Cancel</PushButton>
              <PushButton color="blue">Submit</PushButton>
            </SegmentedControl.Item>
            <SegmentedControl.Item
              title="Tab 1"
              selected={false}
              onPress={() => { console.log('select tab 1'); } }
            >
            </SegmentedControl.Item>
            <SegmentedControl.Item
              title="Settings"
              selected={false}
              onPress={() => { console.log('select settings'); } }
            >
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>

      </div>
    </div>
  ),
  document.getElementById('main')
);
