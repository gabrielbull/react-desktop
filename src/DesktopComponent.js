import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium, { Style } from 'radium';
import { convertColor } from './Color';

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
      color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      background: PropTypes.string,
      requestedTheme: PropTypes.string,
      ...ComposedComponent.propTypes
    };

    static childContextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      color: PropTypes.string,
      background: PropTypes.string,
      requestedTheme: PropTypes.string,
      ...ComposedComponent.childContextTypes
    };

    static contextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      color: PropTypes.string,
      background: PropTypes.string,
      requestedTheme: PropTypes.string,
      ...ComposedComponent.contextTypes
    };

    constructor(props, context, updater) {
      const { visible, display, requestedTheme, color, background, ...properties } = props;
      super(props, context, updater);
      this._requestedTheme = requestedTheme;
      this._background = background;
      this._color = color;

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

      if (!context.requestedTheme) {
        this.context.requestedTheme = requestedTheme ? requestedTheme : 'light';
      }
      this.state.requestedTheme = requestedTheme ? requestedTheme : this.context.requestedTheme;

      if (!context.color) {
        this.context.color = color && typeof color !== 'boolean' ? convertColor(color) : convertColor('blue');
      }
      this.state.color = color && typeof color !== 'boolean' ? convertColor(color) : this.context.color;

      if (!context.background) {
        this.context.background = background ? convertColor(background) : null;
      }
      this.state.background = background ? convertColor(background) : this.context.background;

      if (windowStateEnabled) {
        this.state.windowFocused = true;
      }
    }

    getChildContext() {
      const childContext = {
        parent: this,
        color: this.state.color,
        background: this.state.background,
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
      if (state.color) {
        this._updateColor = true;
        this.context.color = state.color;
      }
      if (state.background) {
        this._updateBackground = true;
        this.context.background = state.background;
      }
      super.setState(state);
    }

    componentDidMount() {
      if (window && windowStateEnabled) {
        window.addEventListener('focus', this.windowFocus);
        window.addEventListener('blur', this.windowBlur);
      }

      if (super.getPlaceholderStyle) {
        this.applyPlaceholderStyle();
      }

      if (super.componentDidMount) {
        super.componentDidMount();
      }
    }

    componentDidUpdate() {
      if (super.getPlaceholderStyle) {
        if (JSON.stringify(this._currentPlaceholderStyle) != JSON.stringify(super.getPlaceholderStyle())) {
          this.applyPlaceholderStyle();
        }
      }

      if (super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }

    componentWillUnmount() {
      if (window && windowStateEnabled) {
        window.removeEventListener('focus', this.windowFocus);
        window.removeEventListener('blur', this.windowBlur);
      }
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }

    render(...params) {
      if (!this._updateRequestedTheme && !this._requestedTheme) {
        this.state.requestedTheme = this.context.requestedTheme;
      }
      this._updateRequestedTheme = null;

      if (!this._updateColor && !this._color) {
        this.state.color = this.context.color;
      }
      this._updateColor = null;

      if (!this._updateBackground && !this._background) {
        this.state.background = this.context.background;
      }
      this._updateBackground = null;

      let rendered = super.render(params);

      if (super.getPlaceholderStyle) {
        rendered = <div ref="container">{rendered}</div>;
      }

      return rendered;
    }

    applyPlaceholderStyle() {
      if (this._currentPlaceholderStyleElement) {
        this._currentPlaceholderStyleElement.parentNode.removeChild(this._currentPlaceholderStyleElement);
      }

      const container = ReactDOM.findDOMNode(this.refs.container);
      const id = Compoment.generateUniqueId();
      container.setAttribute('data-reactdesktopid', id);

      const selector = `[data-reactdesktopid="${id}"]`;

      this._currentPlaceholderStyle = {...super.getPlaceholderStyle()};
      let style = {...super.getPlaceholderStyle()};

      let styles = {0: style};
      if (style[':hover']) {
        styles = {...styles, ':hover': style[':hover']};
        delete styles[0][':hover'];
      }

      if (style[':active']) {
        styles = {...styles, ':active': style[':active']};
        delete styles[0][':active'];
      }

      if (style[':focus']) {
        styles = {...styles, ':focus': style[':focus']};
        delete styles[0][':focus'];
      }

      let rules = {};

      for(var prop in styles) {
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
      return Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        + Math.floor((Math.random() * 10000) + 1) + '-' +
        Math.floor((Math.random() * 100000000000000));
    }

    windowFocus = () => {
      if (windowStateEnabled) {
        this.setState({windowFocused: true});
      }
    }

    windowBlur = () => {
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
