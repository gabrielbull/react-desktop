import React, { Component } from 'react';
import { TextInput } from 'react-desktop/osx';

export default class extends Component {
  change = () => console.log(this.refs.input.value);

  render() {
    return (
      <div style={{ background: 'white', padding: '20px' }}>
        <TextInput
          ref="input"
          label="My Input"
          placeholder="My Input"
          defaultValue="Hello!"
          onChange={this.change}
        />
      </div>
    );
  }
}
