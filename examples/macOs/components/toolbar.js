import React, { Component } from 'react';
import { TitleBar, Toolbar } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <TitleBar
        title="Large Titlebar"
        controls
      >
        <Toolbar/>
      </TitleBar>
    );
  }
}
