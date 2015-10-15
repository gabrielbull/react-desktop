import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from './Styling';
import WindowState from './WindowState';

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
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onPress: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func])
  };

  constructor() {
    super();
    this.state = { windowFocused: true };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  submit() {
    alert('submit');
  }

  render() {
    let { children, color, onPress, ...props } = this.props;

    let styles = this.styles;
    if (color === 'blue' && this.state.windowFocused) {
      styles = Object.assign({}, this.styles, this.styles.blue);
    }

    onPress = this.props.onClick ? this.props.onClick : this.props.onPress;
    if (onPress === 'submit') {
      onPress = this.submit.bind(this);
    }

    return (
      <button
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
