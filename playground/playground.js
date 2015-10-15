import React from 'react';
import ReactDOM from 'react-dom';
import { TitleBar, PushButton, TextField, Toolbar, Box, SegmentedControl } from '../src/Main';

ReactDOM.render(
  (
    <div>
      <div className="window-shadow">
        <TitleBar title="TitleBar" controls={true}/>
        <div className="window"/>
      </div>

      <div className="window-shadow">
        <TitleBar title="TitleBar with Toolbar" controls={true} className="no-margin-bottom">
          <Toolbar/>
        </TitleBar>

        <div className="window">
          <Box className="box">
            <SegmentedControl>
              <SegmentedControl.Item
                title="Selected"
                selected={true}
                onPress={() => { console.log('select login'); } }
              >
                <TextField defaultValue="" placeholder="TextField"/>

                <PushButton>PushButton</PushButton>
                <PushButton color="blue">PushButton Blue</PushButton>
              </SegmentedControl.Item>
              <SegmentedControl.Item
                title="Segmented"
                selected={false}
                onPress={() => { console.log('select tab 1'); } }
              >
              </SegmentedControl.Item>
              <SegmentedControl.Item
                title="Control"
                selected={false}
                onPress={() => { console.log('select settings'); } }
              >
              </SegmentedControl.Item>
            </SegmentedControl>
          </Box>

        </div>
      </div>
    </div>
  ),
  document.getElementById('main')
);
