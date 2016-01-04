import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import WindowState from '../../WindowState';

var styles = {
  button: {
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '10px',
    height: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',
    marginBottom: '.5px',
    marginLeft: '4px',
    marginRight: '4px',
    lineHeight: 0,
    backgroundColor: '#ffbd2e',
    borderColor: '#e1a116',

    ':active': {
      backgroundColor: '#bf9123',
      borderColor: '#ad7d15'
    }
  },

  unfocused: {
    backgroundColor: '#dddddd',
    borderColor: '#d0d0d0',
  },

  icon: {
    width: '8px',
    height: '8px',
    marginTop: '1px',
    marginLeft: '1px'
  }
};

@WindowState
@Radium
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { iconVisible: false, windowFocused: true };
  }

  render() {
    const { style, ...props } = this.props;

    const iconStyle = {
      ...styles.icon,
      opacity: this.state.iconVisible ? 1 : 0
    };

    let componentStyle = { ...styles.button, ...style };
    if (!this.state.windowFocused && !this.state.iconVisible) {
      componentStyle = { ...componentStyle, ...styles.unfocused };
    }

    return (
      <a
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" viewBox="0 0 8 1.1" style={iconStyle}>
          <rect fill="#995700" width="8" height="1.1"/>
        </svg>
      </a>
    );
  }
}

export default Minimize;
