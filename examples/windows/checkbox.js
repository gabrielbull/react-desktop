import React, { Component } from 'react';
import { Checkbox } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  render() {
    return (
      <Checkbox
        color={this.props.color}
        theme={this.props.theme}
        label="Check me!"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}
