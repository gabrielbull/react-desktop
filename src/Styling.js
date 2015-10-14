import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function addStyle(selector, styles) {
  selector = selector.replace(/:placeholder/, '::-webkit-input-placeholder');

  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  let stylesheet = selector + ' {\n';

  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      let property = prop;
      switch (prop) {
      case 'backgroundColor':
        property = 'background-color';
        break;
      case 'backgroundImage':
        property = 'background-image';
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
      stylesheet += '  ' + property + ': ' + styles[prop] + ' !important;\n';
    }
  }

  stylesheet += '}\n';

  style.type = 'text/css';
  style.appendChild(document.createTextNode(stylesheet));
  head.appendChild(style);
  return style;
}

function Styling(ComposedComponent) {
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

export default Styling;
