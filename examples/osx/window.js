import React, { Component } from 'react';
import { Window, TitleBar, Text } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Window
        chrome
        width="1000px"
        height="600px"
        padding="60px"
      >
        <TitleBar title="My OSX Application" controls/>
        <Text>Hello World</Text>
      </Window>
    );
  }
}
