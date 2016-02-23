import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29'
  };

  render() {
    return (
      <ProgressCircle
        color={this.props.color}
        size={100}
      />
    );
  }
}
