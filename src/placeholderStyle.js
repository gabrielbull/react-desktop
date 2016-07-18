import React, { Component } from 'react';
import { Style } from 'radium';

function generateUniqueId() {
  return Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' +
    Math.floor((Math.random() * 100000000000000));
}

function mapRules(selector, style) {
  let styles = { 0: style };
  if (style[':hover']) {
    styles = { ...styles, ':hover': style[':hover'] };
    delete styles[0][':hover'];
  }

  if (style[':active']) {
    styles = { ...styles, ':active': style[':active'] };
    delete styles[0][':active'];
  }

  if (style[':focus']) {
    styles = { ...styles, ':focus': style[':focus'] };
    delete styles[0][':focus'];
  }

  let rules = {};

  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      rules[`${selector} input${prop !== '0' ? prop : ''}::-webkit-input-placeholder`] = styles[prop];
      rules[`${selector} input${prop !== '0' ? prop : ''}::-moz-placeholder`] = styles[prop];
      rules[`${selector} input${prop !== '0' ? prop : ''}:-ms-input-placeholder`] = styles[prop];
      rules[`${selector} input${prop !== '0' ? prop : ''}:placeholder`] = styles[prop];
    }
  }

  return rules;
}

export default class extends Component {
  constructor() {
    super();
    this._id = generateUniqueId();
  }

  render() {
    const { children, placeholderStyle, ...props } = this.props;

    return (
      <div data-reactdesktopid={this._id} {...props}>
        {children}
        <Style rules={mapRules(`[data-reactdesktopid="${this._id}"]`, placeholderStyle)}/>
      </div>
    );
  }
}
