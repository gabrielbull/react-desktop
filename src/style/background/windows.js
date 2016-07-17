import React, { Component, PropTypes, isValidElement } from 'react';
import styleHelper, { extractProps } from '../../styleHelper';
import { ColorContext, colorContextTypes } from '../../style/color/windows';

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
  let component = styleHelper(options, backgroundPropTypes, null, null, options[0]);

  if (component && isValidElement(component)) {
    return component;
  }

  const ComposedComponent = component;
  return function (...args) {
    @ColorContext(true)
    class BackgroundComponent extends Component {
      static contextTypes = { ...colorContextTypes };

      render() {
        const WrappedComponent = ComposedComponent(...args);
        const props = { ...this.props };
        if (typeof props.background === 'boolean') {
          if (!props.background) delete props.background;
          else {
            props.background = this.context.color;
          }
        }

        return <WrappedComponent {...props}/>;
      }
    }
    return BackgroundComponent;
  };
}
