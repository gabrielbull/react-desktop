import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';

export default class extends Component {
  getDefaultProps() {
    return {
      color: '#cc7f29',
      theme: 'dark'
    };
  }

  render() {
    return (
      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        width="1000px"
        height="600px"
        padding="12px"
      >
        <TitleBar title="My Windows Application" controls/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </Window>
    );
  }
}
