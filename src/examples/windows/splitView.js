import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  SplitView
} from 'react-desktop/lib/windows';
import * as Icons from '../../demo/windows/assets/icons';

export default class extends Component {
  render() {
    return (
      <div>
        <h2>
          Demo
        </h2>
        <div style={{background: "#171717"}}>
          <SplitView push requestedTheme="dark">
            <SplitView.Item
              title="Item 1"
              icon={Icons.welcomeIcon}
              requestedTheme="light"
              background="#ffffff"
            >
              <Grid padding="30px 20px">
                This is an example of a Split View Item 1.
              </Grid>
            </SplitView.Item>
            <SplitView.Item
              title="Item 2"
              icon={Icons.formIcon}
              requestedTheme="light"
              background="#ffffff"
            >
              <Grid padding="30px 20px">
                This is an example of a Split View Item 2.
              </Grid>
            </SplitView.Item>
          </SplitView>
        </div>
      </div>
    );
  }
}
