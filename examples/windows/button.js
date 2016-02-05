import React, { Component } from 'react';
import { Button } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29'
  };

  render() {
    return (
      <Button push color={this.props.color} onPress={() => console.log('Pressed!')}>
        Press me!
      </Button>
    );
  }
}
