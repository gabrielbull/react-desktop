import React, { Component } from 'react';
import Logo from './Logo';

const style = {
  width: '100%',
  background: '#222222',
  padding: '10px 20px',
  textAlign: 'center'
};

export default class extends Component {
  render() {
    return (
      <div style={style}>
        <Logo width="200px"/>
      </div>
    );
  }
}
