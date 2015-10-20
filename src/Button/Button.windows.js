import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import WindowState from '../WindowState';

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
      backgroundColor: '#999999',
      transform: 'scale(0.97)',
      transition: 'transform .1s ease-in'
    }
  },

  buttonBlue: {
    color: '#ffffff',
    borderColor: '#0078d7',
    backgroundColor: '#0078d7',

    ':hover': {
      borderColor: '#004e8c'
    },

    ':active': {
      borderColor: '#004e8c',
      backgroundColor: '#004e8c',
      transform: 'none',
      transition: 'none'
    }
  }
};

@WindowState
@Styling
class Button extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]).isRequired,
    form: PropTypes.any,
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onPress: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  constructor(props) {
    super();
    this.state = { windowFocused: true, visible: props.visible !== false, display: props.display !== false };
  }

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
    let { style, children, color, onPress, form, display, visible, ...props } = this.props;

    let componentStyle = style;
    let cssStyle = styles.button;
    if (color === 'blue') {
      cssStyle = mergeStyles(cssStyle, styles.buttonBlue);
    }

    let type = 'button';
    if (this.props.onPress === 'submit') {
      type = 'submit';
      onPress = null;
    } else {
      onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    }

    componentStyle = mergeStyles(componentStyle, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <button
        ref="element"
        type={type}
        onClick={onPress}
        data-style={applyStyle(cssStyle)}
        style={componentStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
