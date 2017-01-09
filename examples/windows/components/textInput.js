import React, { Component } from 'react';
import { TextInput } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };

  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TextInput
        theme={this.props.theme}
        color={this.props.color}
        background
        label="My Input"
        placeholder="My Input"
        onChange={this.handleChange}
      />
    );
  }
}
