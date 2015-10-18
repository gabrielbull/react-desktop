import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import WindowState from '../WindowState';

var styles = {
  osx_10_11: {
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
    fontFamily: '"San Francisco", "Helvetica Neue", "Lucida Grande"',
    fontSize: '13px',

    blue: {
      backgroundImage: '-webkit-linear-gradient(top, #6cb3fa 0%, #087eff 100%)',
      borderTopColor: '#4ca2f9',
      borderBottomColor: '#015cff',
      borderLeftColor: '#267ffc',
      borderRightColor: '#267ffc',
      color: 'rgba(255, 255, 255, .9)'
    },

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
    if (ReactDOM.findDOMNode(this).previousSibling) {
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
    let { children, color, onPress, form, display, visible, ...props } = this.props;

    let styles = this.styles;
    if (color === 'blue' && this.state.windowFocused) {
      styles = mergeStyles(this.styles, this.styles.blue);
    }

    let type = 'button';
    if (this.props.onPress === 'submit') {
      type = 'submit';
      onPress = null;
    } else {
      onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    }

    if (!this.state.visible) {
      styles = mergeStyles(styles, { visibility: 'hidden' });
    } else {
      styles = mergeStyles(styles, { visibility: 'visible' });
    }

    if (!this.state.display) {
      styles = mergeStyles(styles, { display: 'none' });
    } else {
      styles = mergeStyles(styles, { display: 'block' });
    }

    return (
      <button
        type={type}
        ref="element"
        {...props}
        style={applyStyle(styles)}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}

export default PushButton;
