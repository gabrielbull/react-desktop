import React, { Component } from 'react';
import { View, TitleBar } from 'react-desktop/macOs';

export default class extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }

  render() {
    return (
      <TitleBar
        title="untitled text 5"
        controls
        isFullscreen={this.state.isFullscreen}
        onCloseClick={() => console.log('Close window')}
        onMinimizeClick={() => console.log('Minimize window')}
        onMaximizeClick={() => console.log('Mazimize window')}
        onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
      />
    );
  }
}
