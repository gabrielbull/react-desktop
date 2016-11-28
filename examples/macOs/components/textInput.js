import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <div>
        <TextInput
          label="My Input"
          placeholder="My Input"
          defaultValue=""
          onChange={this.handleChange}
        />
        <TextInput
          label="My Password"
          password
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
