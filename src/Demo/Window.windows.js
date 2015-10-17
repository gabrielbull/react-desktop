import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Window,
  TitleBar
} from 'react-desktop/lib/Windows';

export default class extends Component {
  render() {
    return (
      <Window chrome>
        <TitleBar title="Windows" controls/>
      </Window>
    );
  }
}
