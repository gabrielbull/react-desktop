import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent, { Hidden } from '../../desktop-component';
import { darkenColor } from '../../color';
import styles from './styles/windows.10';

@DesktopComponent(Hidden)
class Button extends Component {
  isbutton = true;

  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    push: PropTypes.bool,
    onClick: PropTypes.func,
    onPress: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  };

  componentDidMount() {
    if (findDOMNode(this).previousSibling) {
      this.applySiblingStyle();
    }
  }

  applySiblingStyle() {
    if (!this.refs.element.style.marginLeft) {
      this.refs.element.style.marginLeft = '12px';
    }
  }

  render() {
    let { style, children, color, onPress, push, ...props } = this.props;

    let componentStyle = { ...styles.button, ...style };

    if (color) {
      color = color === true ? this.state.color : color;
      styles.colorButton = {
        ...styles.colorButton,
        borderColor: this.state.color,
        backgroundColor: this.state.color,
        ':hover': {
          ...styles.colorButton[':hover'],
          borderColor: darkenColor(this.state.color, .35)
        },

        ':active': {
          ...styles.colorButton[':active'],
          borderColor: darkenColor(this.state.color, .35),
          backgroundColor: darkenColor(this.state.color, .35)
        }
      };
      componentStyle = { ...componentStyle, ...styles.colorButton };
    }

    let type = 'button';
    if (this.props.onPress === 'submit') {
      type = 'submit';
      onPress = null;
    } else {
      onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    }

    if (push) {
      componentStyle[':active'] = { ...componentStyle[':active'], ...styles.pushTransform };
    }

    return (
      <button
        ref="element"
        type={type}
        onClick={onPress}
        style={componentStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
