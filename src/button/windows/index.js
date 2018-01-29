import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colorPropTypes, colorContextTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes } from '../../style/theme/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Radium from 'radium';
import { darkenColor } from '../../color';
import styles from './styles/windows10';

@Hidden()
@ThemeContext()
@Radium
class Button extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...colorPropTypes,
    ...themePropTypes,
    type: PropTypes.string,
    push: PropTypes.bool,
    onClick: PropTypes.func
  };

  static contextTypes = {
    ...colorContextTypes
  };

  render() {
    let { style, type, children, color, push, onClick, ...props } = this.props;

    let componentStyle = { ...styles.button, ...style };

    if (color) {
      color = color === true ? this.context.color : color;
      styles.colorButton = {
        ...styles.colorButton,
        borderColor: color,
        backgroundColor: color,
        ':hover': {
          ...styles.colorButton[':hover'],
          borderColor: darkenColor(color, .35)
        },

        ':active': {
          ...styles.colorButton[':active'],
          borderColor: darkenColor(color, .35),
          backgroundColor: darkenColor(color, .35)
        }
      };
      componentStyle = { ...componentStyle, ...styles.colorButton };
    }

    if (push) {
      componentStyle[':active'] = { ...componentStyle[':active'], ...styles.pushTransform };
    }

    return (
      <button
        ref="element"
        type={type || 'button'}
        onClick={onClick}
        style={componentStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
