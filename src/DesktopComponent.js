import { PropTypes } from 'react';
import Radium from 'radium';

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

      if (ComposedComponent.prototype.getChildContext) {
        return {
          ...childContext,
          ...ComposedComponent.prototype.getChildContext.apply(this)
        };
      }

      return childContext;
    }

    setState(state) {
      if (state.requestedTheme) {
        this._updateRequestedTheme = true;
        this.context.requestedTheme = state.requestedTheme;
      }
      ComposedComponent.prototype.setState.apply(this, [state]);
    }

    componentDidMount() {
      if (window && windowStateEnabled) {
        window.addEventListener('focus', this.windowFocus.bind(this));
        window.addEventListener('blur', this.windowBlur.bind(this));
      }
      if (ComposedComponent.prototype.componentDidMount) {
        ComposedComponent.prototype.componentDidMount.apply(this);
      }
    }

    componentWillUnmount() {
      if (window && windowStateEnabled) {
        window.removeEventListener('focus', this.windowFocus.bind(this));
        window.removeEventListener('blur', this.windowBlur.bind(this));
      }
      if (ComposedComponent.prototype.componentWillUnmount) {
        ComposedComponent.prototype.componentWillUnmount.apply(this);
      }
    }

    render(...params) {
      if (!this._updateRequestedTheme) {
        this.state.requestedTheme = this.context.requestedTheme;
      }
      this._updateRequestedTheme = null;
      return ComposedComponent.prototype.render.apply(this, params);
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
