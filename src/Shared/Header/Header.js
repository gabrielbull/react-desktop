import React, { Component } from 'react';
import Logo from './Logo';
import style from './Header.scss';

export default class extends Component {
  render() {
    return (
      <header>
        <Logo width="200px"/>
      </header>
    );
  }
}
