import React, { Component } from 'react';
import { View, Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <View
        color={this.props.color}
        background
        padding="20px"
        horizontalAlignment="center"
        verticalAlignment="center"
        width="200px"
        height="100px"
      >
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
      </View>
    );
  }
}
