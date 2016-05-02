import React, { Component } from 'react';
import { TextInput } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#cc7f29',
    theme: 'dark'
  };

  change = () => console.log(this.refs.input.value);

  render() {
    return (
      <TextInput
        ref="input"
        theme={this.props.theme}
        color={this.props.color}
        background
        label="My Input"
        placeholder="My Input"
        defaultValue="Hello!"
        onChange={this.change}
      />
    );
  }
}
