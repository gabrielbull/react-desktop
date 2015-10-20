import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

const pseudos = [
  'hover',
  'active',
  'focus',
  'checked',
  'placeholder',
  'first-child',
  'last-child',
];

const prefixedClasses = ['user-select', 'app-region', 'transform', 'transition'];

const prefixes = [
  '-webkit-',
  '-moz-',
  '-ms-'
];

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

function parseStyle(prop, value) {
  prop = changeStyleCase(prop);
  let returnValue = '';
  if (prefixedClasses.indexOf(prop) !== -1) {
    for (let prefix of prefixes) {
      returnValue += `${prefix}${prop}: ${value}; `;
    }
    if (returnValue) {
      returnValue += `${prop}: ${value}; `;
      return returnValue;
    }
  }

  return `${prop}: ${value}; `;
}

function prefixPseudos(pseudoStyles, stateName, styles) {
  if (stateName === 'placeholder') {
    styles = applyStyle(styles, stateName);

    pseudoStyles[':-webkit-input-placeholder'] = styles;
    pseudoStyles[':-moz-placeholder'] = styles;
    pseudoStyles['-ms-input-placeholder'] = styles;
    pseudoStyles['placeholder'] = styles;

    return pseudoStyles;
  }
  pseudoStyles[stateName] = applyStyle(styles, stateName);
  return pseudoStyles;
}

/**
 * Create a new style element from raw css string.
 * @param {String} stylesheet Raw CSS Stylesheet string.
 * @returns {Element}
 */
function addStyle(stylesheet) {
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(stylesheet));
  head.appendChild(style);
  return style;
}

/**
 * Merges multiple style objects (Usually default OS styling and component props.style)
 * @param {Object} styles
 * @returns {Object}
 */
export function mergeStyles(...styles) {
  let merged = {};
  for (const style of styles) {
    Object.assign(merged, style);
  }
  return merged;
}

export function applyStyle(styles, currentState) {
  let style = '';
  let pseudoStyles = {};
  let childStyles = {};
  for (const prop in styles) {
    if (styles.hasOwnProperty(prop) && typeof styles[prop] !== 'object') {
      style += parseStyle(prop, styles[prop]);
    } else if (styles.hasOwnProperty(prop) && typeof styles[prop] === 'object') {
      const stateName = prop.substring(1);
      if (pseudos.indexOf(stateName) !== -1) {
        pseudoStyles = prefixPseudos(pseudoStyles, stateName, styles[prop]);
      } else {
        if (currentState) {
          childStyles['&:' + currentState + ' ' + prop] = applyStyle(styles[prop]);
        } else {
          childStyles[prop] = applyStyle(styles[prop]);
        }
      }
    }
  }

  style = `& { ${style}}`;

  for (const state in pseudoStyles) {
    if (pseudoStyles.hasOwnProperty(state)) {
      const content = pseudoStyles[state].replace(/\& \{/, `&:${state} {`);
      style += ' ' + content;
    }
  }

  for (const selector in childStyles) {
    if (childStyles.hasOwnProperty(selector)) {
      let content = childStyles[selector].replace(/\& \{/, `& ${selector} {`);
      content = content.replace('& &', '&');
      style += ' ' + content;
    }
  }

  return style.trim();
}

export default function Styling(ComposedComponent) {
  return class extends Component {
    stylesheets = {};

    componentDidMount() {
      var component = findDOMNode(this.refs.component);
      this.applyStyle(component, true);
    }

    applyStyle(element, doNotForce) {
      if (element.getAttribute || !doNotForce) {
        const id = element.getAttribute('data-reactid');

        let style = element.getAttribute('data-style');
        element.removeAttribute('data-style');

        if (style) {
          const escapedId = id.replace(/\$/g, '$\\');
          style = style.replace(/&([\- :a-zA-Z0-9]*)? \{/g, `[data-reactid="${escapedId}"]$1 {`);
          style = style.replace(/\$\\/g, '$');

          if (this.stylesheets[id]) {
            if (this.stylesheets[id].innerHTML.trim() !== style) {
              this.removeStylesheet(this.stylesheets[id]);
              delete this.stylesheets[id];
              this.stylesheets[id] = addStyle(style);
            }
          } else {
            this.stylesheets[id] = addStyle(style);
          }
        }

        if (element.childNodes) {
          for (var i = 0, len = element.childNodes.length; i < len; ++i) {
            this.applyStyle(element.childNodes[i], doNotForce);
          }
        }
      }
    }

    componentDidUpdate() {
      if (this.refs.component) {
        var component = findDOMNode(this.refs.component);
        this.applyStyle(component, true);
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
