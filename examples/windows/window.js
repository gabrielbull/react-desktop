import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <Window
        color="#cc7f29"
        theme="dark"
        chrome
        style={{ width: '1000px', height: '600px' }}
      >
        <TitleBar title="My Windows Application" controls/>
      </Window>
    );
  }
}
