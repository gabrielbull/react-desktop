import React, { Component, PropTypes } from 'react';
import { applyDefaultProps } from '../../styleHelper';

export const colorPropTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export const colorContextTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const applyColorProps = (props, context) => applyDefaultProps(props, context, { color: '#0063ae' });

export function ColorContext(preserveProperty = false) {
  return function (ComposedComponent) {
    return class extends Component {
      static propTypes = { ...colorPropTypes };
      static contextTypes = { ...colorContextTypes };
      static childContextTypes = { ...colorContextTypes };

      getChildContext() {
        return {
          color: applyColorProps(this.props, this.context).color
        };
      }

      render() {
        const { ...props } = this.props;
        if (!preserveProperty) delete props.color;
        return (
          <ComposedComponent {...props}/>
        );
      }
    };
  }
}
