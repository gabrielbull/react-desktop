import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';

export default class extends Component {
  render() {
    return (
      <Button color="blue" onClick={() => console.log('Clicked!')}>
        Press me!
      </Button>
    );
  }
}
