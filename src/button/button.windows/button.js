import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import DesktopComponent from '../../desktop-component';
import { darkenColor } from '../../color';

var styles = {
  button: {
    userSelect: 'none',
    cursor: 'default',
    backgroundColor: '#cccccc',
    outline: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#cccccc',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '32px',
    paddingRight: '32px',
    lineHeight: '28px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    color: '#000000',

    ':hover': {
      color: '#000000',
      borderColor: '#7a7a7a'
    },

    ':active': {
      color: '#000000',
      borderColor: '#999999',
      backgroundColor: '#999999'
    }
  },

  colorButton: {
    color: '#ffffff',
    borderColor: '#0078d7',
    backgroundColor: '#0078d7',

    ':hover': {
      borderColor: '#004e8c'
    },

    ':active': {
      borderColor: '#004e8c',
      backgroundColor: '#004e8c'
    }
  },

  pushTransform: {
    transform: 'scale(0.97)',
    transition: 'transform .1s ease-in'
  }
};

@DesktopComponent
class Button extends Component {
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
    switch (color) {
    case true:
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
      break;
    case 'blue':
      componentStyle = { ...componentStyle, ...styles.colorButton };
      break;
    }

    let type = 'button';
    if (this.props.onPress === 'submit') {
      type = 'submit';
      onPress = null;
    } else {
      onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    }

    componentStyle = {
      ...componentStyle,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    };

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
