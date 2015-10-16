import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function changeStyleCase(prop) {
  return prop.replace(/([A-Z])/g, function (g) {
    return `-${g.toLowerCase()}`;
  });
}

function addStyle(selector, styles) {
  selector = selector.replace(/:placeholder/, '::-webkit-input-placeholder');

  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  let stylesheet = `${selector} {\n`;

  if (typeof styles === 'string') {
    stylesheet += styles;
  } else {
    for (let prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        stylesheet += `  ${changeStyleCase(prop)}: ${styles[prop]} !important;\n`;
      }
    }
  }

  stylesheet += '}\n';

  style.type = 'text/css';
  style.appendChild(document.createTextNode(stylesheet));
  head.appendChild(style);
  return style;
}

function addRawStyle(stylesheet) {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
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
    stylesheets = {};

    componentDidMount() {
      this.applyInlineStyles();
      this.applyPropStyles();
    }

    applyInlineStyles() {
      let states = [':hover', ':active', ':focus', ':placeholder'];
      for (let state of states) {
        if (this.refs.component.styles[state]) {
          const element = ReactDOM.findDOMNode(this);
          const id = element.getAttribute('data-reactid');
          this.stylesheets[state] = addStyle(`[data-reactid="${id}"]${state}`, this.refs.component.styles[state])
        }
      }
    }

    applyPropStyles() {
      let states = ['hover', 'active', 'focus', 'hover-selector', 'active-selector', 'focus-selector'];
      if (this.refs.component.refs.element) {
        const element = ReactDOM.findDOMNode(this.refs.component.refs.element);

        for (let state of states) {
          const attrName = `data-${state}-style`;
          const style = element.getAttribute(attrName);
          const id = element.getAttribute('data-reactid');

          if (style && !this.stylesheets[attrName]) {
            if (state.match(/\-selector$/)) {
              state = state.replace(/\-selector$/, '');
              this.stylesheets[attrName] = addRawStyle(`[data-reactid="${id}"]:${state} ${style}`);
            } else {
              this.stylesheets[attrName] = addStyle(`[data-reactid="${id}"]:${state}`, style);
            }
          } else if (this.stylesheets[attrName]) {
            this.removeStylesheet(this.stylesheets[attrName]);
            delete this.stylesheets[attrName];
          }
        }
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.refs.component.refs.element) {
        this.applyPropStyles();
      }
    }

    componentWillUpdate(nextProps, nextState) {
      if (nextState) {
        this.refs.component.setState(nextState);
      }
    }

    componentWillUnmount() {
      for (var prop in this.stylesheets) {
        if (this.stylesheets.hasOwnProperty(prop)) {
          this.removeStylesheet(this.stylesheets[prop]);
          delete this.stylesheets[prop];
        }
      }
    }

    removeStylesheet(stylesheet) {
      stylesheet.parentNode.removeChild(stylesheet);
    }

    render() {
      return (
        <ComposedComponent ref="component" {...this.props}/>
      );
    }
  };
}
