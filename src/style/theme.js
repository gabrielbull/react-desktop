import { PropTypes } from 'react';

function Theme(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      theme: PropTypes.string
    };

    static childContextTypes = {
      ...ComposedComponent.childContextTypes,
      theme: PropTypes.string
    };

    static contextTypes = {
      ...ComposedComponent.contextTypes,
      theme: PropTypes.string
    };

    constructor(props, context, updater) {
      super(props, context, updater);
      this.state = {
        ...this.state,
        theme: context.theme
      };
    }

    getChildContext() {
      const childContext = {
        theme: this.state.theme
      };

      if (super.getChildContext) return { ...super.getChildContext(), ...childContext };
      return childContext;
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (nextContext.theme !== this.state.theme) {
        this.setState({ theme: nextContext.theme });
      }

      if (super.componentWillReceiveProps) {
        return super.componentWillReceiveProps(nextProps, nextContext);
      }
    }
  }
}

export default function(...options) {
  if (options.length === 1 && typeof options[0] === 'function') return Theme.apply(null, [[], options[0]]);
  return Theme.bind(null, options);
}
