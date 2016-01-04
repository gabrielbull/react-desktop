import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import WindowState from '../WindowState';

var styles = {
  button: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    backgroundColor: '#ffffff',
    outline: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    borderTopColor: '#c8c8c8',
    borderBottomColor: '#acacac',
    borderLeftColor: '#c2c2c2',
    borderRightColor: '#c2c2c2',
    boxShadow: '0 1px rgba(0, 0, 0, .039)',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: '13px',
    paddingRight: '13px',
    lineHeight: '19px',
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
    fontSize: '13px',

    ':active': {
      backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%)',
      borderTopColor: '#247fff',
      borderBottomColor: '#003ddb',
      borderLeftColor: '#125eed',
      borderRightColor: '#125eed',
      color: 'rgba(255, 255, 255, .9  )'
    }
  },

  blue: {
    backgroundImage: '-webkit-linear-gradient(top, #6cb3fa 0%, #087eff 100%)',
    borderTopColor: '#4ca2f9',
    borderBottomColor: '#015cff',
    borderLeftColor: '#267ffc',
    borderRightColor: '#267ffc',
    color: 'rgba(255, 255, 255, .9)',

    ':active': {
      backgroundImage: '-webkit-linear-gradient(top, #4c98fe 0%, #0564e3 100%)',
      borderTopColor: '#247fff',
      borderBottomColor: '#003ddb',
      borderLeftColor: '#125eed',
      borderRightColor: '#125eed',
      color: 'rgba(255, 255, 255, .9  )'
    }
  }
};

@WindowState
@Styling
class PushButton extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
    form: PropTypes.any,
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onPress: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    let { style, children, color, onPress, form, display, visible, ...props } = this.props;

    let componentStyle = style;
    let cssStyle = styles.button;
    if (color === 'blue' && this.state.windowFocused) {
      cssStyle = mergeStyles(cssStyle, styles.blue);
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

export default PushButton;
