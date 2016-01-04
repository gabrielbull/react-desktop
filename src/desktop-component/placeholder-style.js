import React from 'react';
import ReactDOM from 'react-dom';
import { Style } from 'radium';

class PlaceholderStyleComponent {
  constructor(root) {
    this.root = root;
  }

  componentDidMount() {
    if (this.root.getPlaceholderStyle) {
      this.applyPlaceholderStyle();
    }
  }

  componentDidUpdate() {
    if (this.root.getPlaceholderStyle) {
      if (JSON.stringify(this._currentPlaceholderStyle) != JSON.stringify(this.root.getPlaceholderStyle())) {
        this.applyPlaceholderStyle();
      }
    }
  }

  applyPlaceholderStyle() {
    if (this._currentPlaceholderStyleElement) {
      this._currentPlaceholderStyleElement.parentNode.removeChild(this._currentPlaceholderStyleElement);
    }

    const container = ReactDOM.findDOMNode(this.root.refs.container);
    const id = PlaceholderStyleComponent.generateUniqueId();
    container.setAttribute('data-reactdesktopid', id);

    const selector = `[data-reactdesktopid="${id}"]`;

    this._currentPlaceholderStyle = { ...this.root.getPlaceholderStyle() };
    let style = { ...this.root.getPlaceholderStyle() };

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

    const tmpContainer = document.createElement('div');
    ReactDOM.render(<Style rules={rules}/>, tmpContainer);
    container.appendChild(this._currentPlaceholderStyleElement = tmpContainer.firstChild);
  }


  static generateUniqueId() {
    return Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' + +Math.floor((Math.random() * 10000) + 1) + '-' +
      Math.floor((Math.random() * 100000000000000));
  }
}

export default PlaceholderStyleComponent;
