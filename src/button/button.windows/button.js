import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent, { Hidden } from '../../desktop-component';
import { darkenColor } from '../../color';
import styles from './styles/windows.10';

@DesktopComponent(Hidden)
class Button extends Component {
  isbutton = true;

  static propTypes = {
    type: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    push: PropTypes.bool,
    onClick: PropTypes.func
  };

  render() {
    let { style, type, children, color, push, onClick, ...props } = this.props;

    let componentStyle = { ...styles.button, ...style };

    if (color) {
      color = color === true ? this.state.color : color;
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
