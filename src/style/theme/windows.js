import { PropTypes } from 'react';

export const themePropTypes = {
  theme: PropTypes.string
};

export const themeContextTypes = {
  theme: PropTypes.string
};

function Theme(options, ComposedComponent) {
  return class extends ComposedComponent {
    static propTypes = {
      ...ComposedComponent.propTypes,
      ...themePropTypes
    };

    static childContextTypes = {
      ...ComposedComponent.childContextTypes,
      ...themeContextTypes
    };

    static contextTypes = {
      ...ComposedComponent.contextTypes,
      ...themeContextTypes
    };

    constructor(props, context, updater) {
      super(props, context, updater);
      this.state = {
        ...this.state,
        theme: props.theme ? props.theme : context.theme
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
      if (!nextProps.theme && nextContext.theme !== this.state.theme) {
        this.setState({ theme: nextContext.theme });
      } else if (nextProps.theme && nextProps.theme !== this.state.theme) {
        this.setState({ theme: nextProps.theme });
      }

      if (super.componentWillReceiveProps) {
        return super.componentWillReceiveProps(nextProps, nextContext);
      }
    }
  }
}

export default function(...options) {
  return Theme.bind(null, options);
}
