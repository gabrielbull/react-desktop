import React, { Component } from 'react';
import { TitleBar, Toolbar, Text } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <TitleBar controls inset>
        <Toolbar height="43" horizontalAlignment="center"/>
      </TitleBar>
    );
  }
}
