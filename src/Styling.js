import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function changeStyleCase(prop) {
  let property = prop;
  switch (prop) {
  case 'backgroundColor':
    property = 'background-color';
    break;
  case 'backgroundImage':
    property = 'background-image';
    break;
  case 'borderColor':
    property = 'border-color';
    break;
  case 'borderTopColor':
    property = 'border-top-color';
    break;
  case 'borderBottomColor':
    property = 'border-bottom-color';
    break;
  case 'borderLeftColor':
    property = 'border-left-color';
    break;
  case 'borderRightColor':
    property = 'border-right-color';
    break;
  case 'boxShadow':
    property = 'box-shadow';
    break;
  }
  return property;
}

function addStyle(selector, styles) {
  selector = selector.replace(/:placeholder/, '::-webkit-input-placeholder');

  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  let stylesheet = selector + ' {\n';

  if (typeof styles === 'string') {
    stylesheet += styles;
  } else {
    for (let prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        let property = changeStyleCase(prop);
        stylesheet += '  ' + property + ': ' + styles[prop] + ' !important;\n';
      }
    }
  }

  stylesheet += '}\n';

  style.type = 'text/css';
  style.appendChild(document.createTextNode(stylesheet));
  head.appendChild(style);
  return style;
}

export function mergeStyles(...styles) {
  let merged = {};
  for (let style of styles) {
    merged = Object.assign(merged, style);
  }
  return merged;
}

export function applyStyle(merged) {
  let styles = {};
  for (var prop in merged) {
    if (merged.hasOwnProperty(prop) && typeof merged[prop] !== 'object') {
      styles[prop] = merged[prop];
    }
  }
  return styles;
}

export function parseStyle(styles) {
  let style = '';
  for (var prop in styles) {
    if (styles.hasOwnProperty(prop) && typeof styles[prop] !== 'object') {
      style += `${changeStyleCase(prop)}: ${styles[prop]}; `;
    }
  }
  return style;
}

export default function Styling(ComposedComponent) {
  return class extends Component {
    stylesheets = [];

    componentDidMount() {
      let states = [':hover', ':active', ':focus', ':placeholder'];
      for (let state of states) {
        if (this.refs.component.styles[state]) {
          const element = ReactDOM.findDOMNode(this);
          const id = element.getAttribute('data-reactid');
          this.stylesheets = [
            ...this.stylesheets,
            addStyle('[data-reactid="' + id + '"]' + state, this.refs.component.styles[state])
          ];
        }
      }

      if (this.refs.component.refs.element) {
        const element = ReactDOM.findDOMNode(this.refs.component.refs.element);
        const activeStyle = element.getAttribute('data-active-style');
        const id = element.getAttribute('data-reactid');
        if (activeStyle) {
          this.stylesheets = [
            ...this.stylesheets,
            addStyle('[data-reactid="' + id + '"]:active', activeStyle)
          ];
        }
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (nextState) {
        this.refs.component.setState(nextState);
      }
    }

    componentWillUnmount() {
      for (let element of this.stylesheets) {
        element.parentNode.removeChild(element);
      }
    }

    render() {
      return (
        <ComposedComponent ref="component" {...this.props}/>
      );
    }
  };
}
