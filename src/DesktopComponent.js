import { PropTypes } from 'react';

export const WindowState = 'WindowState';

function ExtendComposedComponent (ComposedComponent) {
  const windowStateEnabled = this.windowStateEnabled;

  return class extends ComposedComponent {
    static propTypes = {
      children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
      style: PropTypes.object,
      visible: PropTypes.bool,
      display: PropTypes.bool,
      ...ComposedComponent.propTypes
    };

    static childContextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      theme: PropTypes.string,
      ...ComposedComponent.childContextTypes
    };

    static contextTypes = {
      parent: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
      theme: PropTypes.string,
      ...ComposedComponent.contextTypes
    };

    constructor(props, context, updater) {
      const { visible, display, ...properties } = props;
      super(props, context, updater);

      if (!this.state) {
        this.state = {};
      }
      if (!this.state.visible) {
        this.state.visible = visible ? true : false;
      }
      if (!this.state.display) {
        this.state.display = display ? true : false;
      }
    }

    getChildContext() {
      const childContext = {
        parent: this,
        theme: this.context.theme
      };

      if (ComposedComponent.prototype.getChildContext) {
        return {
          ...childContext,
          ...ComposedComponent.prototype.getChildContext.apply(this)
        };
      }

      return childContext;
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

    windowFocus() {
      if (windowStateEnabled) {
        this.setState({windowFocused: true});
      }
    }

    windowBlur() {
      if (this.refs.component && windowStateEnabled) {
        this.refs.component.setState({windowFocused: false});
      }
    }
  };
}

export default function DesktopComponent(...options) {
  if (options.length === 1 && typeof options[0] === 'function') {
    return ExtendComposedComponent.apply({}, [...options]);
  }

  return ExtendComposedComponent.bind({
    windowStateEnabled:  options.indexOf(WindowState) !== -1
  });
}
