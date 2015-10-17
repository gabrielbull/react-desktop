import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReadMe from '../../raw-docs/README.html';

export default class extends Component {
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: ReadMe}} />
      </div>
    );
  }
}
