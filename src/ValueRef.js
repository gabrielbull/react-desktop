import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

function ValueRef(ComposedComponent) {
  return class extends Component {
    get value() {
      return findDOMNode(this).getElementsByTagName('input')[0].value;
    }

    set value(value) {
      findDOMNode(this).getElementsByTagName('input')[0].value = value;
    }

    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return ValueRef.apply(null, [options[0]]);
  return ValueRef.bind(options);
}
