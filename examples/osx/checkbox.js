import React, { Component } from 'react';
import { Checkbox } from 'react-desktop/osx';

export default class extends Component {
  render() {
    return (
      <Checkbox
        label="Check me!"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}
