import React, { Component } from 'react';
import { NavPane } from 'react-desktop/windows';

export default class extends Component {
  render() {
    return (
      <NavPane openLength={200} push>
        {this.renderItem('Item 1', 'Content 1')}
        {this.renderItem('Item 2', 'Content 2')}
        {this.renderItem('Item 3', 'Content 3')}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPane.Item
        title={title}
        icon="hi"
        requestedTheme="light"
        background="#ffffff"
      >
        {content}
      </NavPane.Item>
    );
  }
}
