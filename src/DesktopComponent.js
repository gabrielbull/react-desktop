import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium, { Style } from 'radium';

export const WindowState = 'WindowState';

function ExtendComposedComponent (ComposedComponent) {
  const windowStateEnabled = this.windowStateEnabled ? true : false;

  @Radium
  class Compoment extends ComposedComponent {
    static propTypes = {
      children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
      style: PropTypes.object,
      visible: PropTypes.bool,
      display: PropTypes.bool,
      requestedTheme: PropTypes.string,
      ...ComposedComponent.propTypes
    };

    static childContextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      requestedTheme: PropTypes.string,
      ...ComposedComponent.childContextTypes
    };

    static contextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      requestedTheme: PropTypes.string,
      ...ComposedComponent.contextTypes
    };

    constructor(props, context, updater) {
      const { visible, display, requestedTheme, ...properties } = props;
      super(props, context, updater);

      if (!this.context) {
        this.context = {};
      }
      if (!this.state) {
        this.state = {};
      }
      if (!this.state.visible) {
        this.state.visible = visible !== false;
      }
      if (!this.state.display) {
        this.state.display = display !== false;
      }

      if (!context || !context.requestedTheme) {
        this.context.requestedTheme = requestedTheme ? requestedTheme : 'light ';
      }
      this.state.requestedTheme = this.context.requestedTheme;

      if (windowStateEnabled) {
        this.state.windowFocused = true;
      }
    }

    getChildContext() {
      const childContext = {
        parent: this,
        requestedTheme: this.state.requestedTheme
      };

      if (super.getChildContext) {
        return {
          ...childContext,
          ...super.getChildContext()
        };
      }

      return childContext;
    }

    setState(state) {
      if (state.requestedTheme) {
        this._updateRequestedTheme = true;
        this.context.requestedTheme = state.requestedTheme;
      }
      super.setState(state);
    }

    componentDidMount() {
      if (window && windowStateEnabled) {
        window.addEventListener('focus', this.windowFocus.bind(this));
        window.addEventListener('blur', this.windowBlur.bind(this));
      }

      if (ComposedComponent.placeHolderSyle) {
        this.applyPlaceholderStyle();
      }

      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentWillUnmount() {
      if (window && windowStateEnabled) {
        window.removeEventListener('focus', this.windowFocus.bind(this));
        window.removeEventListener('blur', this.windowBlur.bind(this));
      }
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }

    render(...params) {
      if (!this._updateRequestedTheme) {
        this.state.requestedTheme = this.context.requestedTheme;
      }
      this._updateRequestedTheme = null;

      let rendered = super.render(params);

      if (ComposedComponent.placeHolderSyle) {
        rendered = <div ref="container">{rendered}</div>;
      }

      return rendered;
    }

    applyPlaceholderStyle() {
      const container = ReactDOM.findDOMNode(this.refs.container);
      const id = Compoment.generateUniqueId();
      container.setAttribute('data-reactdesktopid', id);

      const selector = `[data-reactdesktopid="${id}"]`;

      let rules = {};
      rules[`${selector} input::-webkit-input-placeholder`] = ComposedComponent.placeHolderSyle;
      rules[`${selector} input::-moz-placeholder`] = ComposedComponent.placeHolderSyle;
      rules[`${selector} input:-ms-input-placeholder`] = ComposedComponent.placeHolderSyle;
      rules[`${selector} input:placeholder`] = ComposedComponent.placeHolderSyle;

      const tmpContainer = document.createElement('div');
      ReactDOM.render(<Style rules={rules}/>, tmpContainer);
      container.appendChild(tmpContainer.firstChild);
    }

    static generateUniqueId() {
      return Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        Math.floor((Math.random() * 100000000000000));
    }

    windowFocus() {
      if (windowStateEnabled) {
        this.setState({windowFocused: true});
      }
    }

    windowBlur() {
      if (windowStateEnabled) {
        this.setState({windowFocused: false});
      }
    }
  }

  return Compoment;
}

export default function DesktopComponent(...options) {
  if (options.length === 1 && typeof options[0] === 'function') {
    return ExtendComposedComponent.apply({}, [...options]);
  }

  return ExtendComposedComponent.bind({
    windowStateEnabled:  options.indexOf(WindowState) !== -1
  });
}
