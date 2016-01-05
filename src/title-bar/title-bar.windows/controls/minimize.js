import React, { Component } from 'react';
import DesktopComponent, { WindowFocus } from '../../../desktop-component';
import { isDarkColor } from '../../../color';

var styles = {
  button: {
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '100%',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: '#e5e5e5'
    },

    ':active': {
      backgroundColor: '#cccccc'
    }
  },

  buttonColorBackground: {
    ':hover': {
      transition: 'background-color 0.1s',
      backgroundColor: 'rgba(255, 255, 255, .13)'
    },

    ':active': {
      backgroundColor: 'rgba(255, 255, 255, .23)'
    }
  },

  icon: {
    width: '10px',
    height: '10px'
  }
};

@DesktopComponent(WindowFocus)
class Minimize extends Component {
  render() {
    const { style, ...props } = this.props;

    let svgFill = '#000000';
    if (!this.state.windowFocused && this.state.theme !== 'dark') {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    let componentStyle = { ...styles.button, ...style };
    if (this.state.theme === 'dark' || this.state.background && isDarkColor(this.state.background)) {
      svgFill = '#ffffff';
      componentStyle = { ...componentStyle, ...styles.buttonColorBackground };
    }

    return (
      <a
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" viewBox="0 0 10.2 1" style={styles.icon}>
          <rect fill={svgFill} width="10.2" height="1"/>
        </svg>
      </a>
    );
  }
}

export default Minimize;
