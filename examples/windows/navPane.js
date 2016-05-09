import React, { Component } from 'react';
import { NavPane } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Item 1'
    }
  }

  render() {
    return (
      <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
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
        requestedTheme="light"
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        push
      >
        {content}
      </NavPane.Item>
    );
  }
}
