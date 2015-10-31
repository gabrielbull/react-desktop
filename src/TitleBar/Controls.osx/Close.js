import React, { Component, PropTypes } from 'react';
import WindowState from '../../WindowState';
import Radium from 'radium';

const styles = {
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
    backgroundColor: '#ff5f57',
    borderColor: '#e2463f',

    ':active': {
      backgroundColor: '#bf4943',
      borderColor: '#ad3934'
    }
  },

  unfocused: {
    backgroundColor: '#dddddd',
    borderColor: '#d0d0d0',
  },

  icon: {
    width: '6px',
    height: '6px',
    marginTop: '2px',
    marginLeft: '2px'
  }
};

@WindowState
@Radium
class Close extends Component {
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
        <svg x="0px" y="0px" viewBox="0 0 6.4 6.4" style={iconStyle}>
          <polygon fill="#4d0000" points="6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2 "/>
        </svg>
      </a>
    );
  }
}

export default Close;
