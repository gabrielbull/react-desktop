import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import WindowState from '../WindowState';

var styles = {
  button: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: 'rgb(202,202,202)',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(112,112,112)',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '13px',
    paddingRight: '13px',
    lineHeight: '23px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '12px',

    ':hover': {
      borderColor: 'rgba(51,153,255,0.7)',
      backgroundColor: 'rgba(51,153,255,0.4)'
    },

    ':active': {
      borderColor: 'rgba(51,153,255,0.9)',
      backgroundColor: 'rgba(41,143,245,0.4)'
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

    let type = 'button';
    if (this.props.onPress === 'submit') {
      type = 'submit';
      onPress = null;
    } else {
      onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    }

    style = mergeStyles(style, {
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    });

    return (
      <button
        ref="element"
        type={type}
        onClick={onPress}
        data-style={applyStyle(styles.button)}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
