import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import styleHelper, { extractProps } from '../../styleHelper';
import { ColorContext, colorContextTypes } from '../../style/color/windows';
import Radium from 'radium';

export const backgroundPropTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export const backgroundContextTypes = {
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export function removeBackgroundProps(props) {
  return extractProps(props, backgroundPropTypes)[0];
}

export default function(...options) {
  if (options[0] && isValidElement(options[0])) {
    @ColorContext(true)
    @Radium
    class BackgroundElement extends Component {
      static contextTypes = { ...colorContextTypes };

      render () {
        const props = { ...options[1] };
        if (typeof props.background === 'boolean') {
          if (!props.background) delete props.background;
          else if (this.context.color) props.background = this.context.color;
          else delete props.background;
        }

        options[1] = { ...props };
        return styleHelper(options, backgroundPropTypes);
      }
    }
    return <BackgroundElement />;
  }

  return function (WrappedComponent) {
    const ComposedComponent = styleHelper(options, backgroundPropTypes, null, null, options[0])(WrappedComponent);
    @ColorContext(true)
    class BackgroundComponent extends Component {
      static contextTypes = { ...colorContextTypes };

      render() {
        const props = { ...this.props };
        if (typeof props.background === 'boolean') {
          if (!props.background) delete props.background;
          else {
            props.background = this.context.color;
          }
        }
        return <ComposedComponent {...props}/>;
      }
    }
    return BackgroundComponent;
  };
}
