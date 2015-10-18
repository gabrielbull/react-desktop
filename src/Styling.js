import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Dasherizes a camelCased string.
 * @param {String} prop
 * @returns {String}
 */
function changeStyleCase(prop) {
  return prop.replace(/([A-Z])/g, function (g) {
    return `-${g.toLowerCase()}`;
  });
}

/**
 * Creates a new style element and append the provided array of styles.
 * @param {String} selector
 * @param {String[]} styles Array of css styles to append to new stylesheet.
 * @returns {Element.style}
 */
function addStyle(selector, styles) {
  selector = selector.replace(/:placeholder/, '::-webkit-input-placeholder');

  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  let stylesheet = `${selector} {\n`;

  if (typeof styles === 'string') {
    stylesheet += styles;
  } else {
    for (const prop in styles) {
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

/**
 * Create a new style element from raw css string.
 * @param {String} stylesheet Raw CSS Stylesheet string.
 * @returns {Element.style}
 */
function addRawStyle(stylesheet) {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(stylesheet));
  head.appendChild(style);
  return style;
}

/**
 * Merges multiple style objects (Usually default OS styling and component props.style)
 * @param {Object[]} styles
 * @returns {Object}
 */
export function mergeStyles(...styles) {
  let merged = {};
  for (const style of styles) {
    Object.assign(merged, style);
  }
  return merged;
}

export function applyStyle(merged) {
  let styles = {};
  for (const prop in merged) {
    if (merged.hasOwnProperty(prop) && typeof merged[prop] !== 'object') {
      styles[prop] = merged[prop];
    }
  }
  return styles;
}

export function parseStyle(styles) {
  let style = '';
  for (const prop in styles) {
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
      const states = [':hover', ':active', ':focus', ':placeholder'];
      const element = ReactDOM.findDOMNode(this);
      const id = element.getAttribute('data-reactid');
      for (const state of states) {
        if (this.refs.component.styles[state]) {
          this.stylesheets[state] = addStyle(`[data-reactid="${id}"]${state}`, this.refs.component.styles[state])
        }
      }
    }

    applyPropStyles() {
      const states = ['hover', 'active', 'focus', 'hover-selector', 'active-selector', 'focus-selector'];
      if (this.refs.component.refs.element) {
        const element = ReactDOM.findDOMNode(this.refs.component.refs.element);
        const id = element.getAttribute('data-reactid');

        for (let state of states) {
          const attrName = `data-${state}-style`;
          const style = element.getAttribute(attrName);

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

    componentDidUpdate() {
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
      for (const prop in this.stylesheets) {
        if (this.stylesheets.hasOwnProperty(prop)) {
          this.removeStylesheet(this.stylesheets[prop]);
          delete this.stylesheets[prop];
        }
      }
    }

    /**
     * Removes the specified stylesheet.
     * @param {Object} stylesheet
     */
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
