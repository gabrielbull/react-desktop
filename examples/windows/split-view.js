import React, { Component } from 'react';
import { SplitView } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <SplitView openLength={200} push>
        {this.renderItem('Item 1', 'Content 1')}
        {this.renderItem('Item 2', 'Content 2')}
        {this.renderItem('Item 3', 'Content 3')}
      </SplitView>
    );
  }

  renderItem(title, content) {
    return (
      <SplitView.Item
        title={title}
        requestedTheme="light"
        background="#ffffff"
      >
        {content}
      </SplitView.Item>
    );
  }
}
