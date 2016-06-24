import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

export default class extends Component {
  change = () => console.log(this.refs.input.value);

  render() {
    return (
      <TextInput
        ref="input"
        label="My Input"
        placeholder="My Input"
        defaultValue=""
        onChange={this.change}
      />
    );
  }
}
