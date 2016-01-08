import React, { Component } from 'react';
import { Window, TitleBar, View, Button } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        style={{ width: '1000px', height: '600px' }}
      >
        <TitleBar title="My Windows Application" controls/>
      </Window>
    );
  }
}
