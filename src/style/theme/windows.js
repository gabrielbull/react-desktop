import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { applyDefaultProps } from '../../styleHelper';

export const themePropTypes = {
  theme: PropTypes.string
};

export const themeContextTypes = {
  theme: PropTypes.string
};

const applyThemeProps = (props, context) => applyDefaultProps(props, context, { theme: 'light' });

export function ThemeContext() {
  return function (ComposedComponent) {
    return class extends Component {
      static propTypes = { ...themePropTypes };
      static contextTypes = { ...themeContextTypes };
      static childContextTypes = { ...themeContextTypes };

      getChildContext() {
        return {
          theme: applyThemeProps(this.props, this.context).theme
        };
      }

      render() {
        const { ...props } = this.props;
        delete props.theme;
        return (
          <ComposedComponent {...props}/>
        );
      }
    };
  }
}
