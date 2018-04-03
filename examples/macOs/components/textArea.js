import React, { Component } from 'react';
import { TextArea } from 'react-desktop/macOs';

export default class extends Component {
  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TextArea
        label="My Input"
        placeholder="My Input"
        defaultValue=""
        rows={5}
        cols={80}
        onChange={this.handleChange}
      />
    );
  }
}
