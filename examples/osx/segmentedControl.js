import React, { Component } from 'react';
import { SegmentedControl, Text } from 'react-desktop/osx';

export default class extends Component {
  constructor() {
    super();
    this.state = { selected: 1 }
  }

  render() {
    return (
      <div style={{ width: '600px', padding: '20px', background: '#e3e3e3' }}>
        <SegmentedControl box>
          {this.renderItems()}
        </SegmentedControl>
      </div>
    );
  }

  renderItems() {
    return [
      this.renderItem(1, 'Tab 1', <Text>Content 1</Text>),
      this.renderItem(2, 'Tab 2', <Text>Content 2</Text>),
      this.renderItem(3, 'Tab 3', <Text>Content 3</Text>)
    ];
  }

  renderItem(key, title, content) {
    return (
      <SegmentedControl.Item
        key={key}
        title={title}
        selected={this.state.selected === key}
        onSelect={() => this.setState({ selected: key })}
      >
        {content}
      </SegmentedControl.Item>
    );
  }
}
