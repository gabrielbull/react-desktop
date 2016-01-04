import React, { Component } from 'react';
import DesktopComponent, { WindowFocus } from '../../DesktopComponent';
import { isDarkColor } from '../../Color';

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
class Maximize extends Component {
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
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={styles.icon}>
          <path
            fill={svgFill}
            d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
          />
        </svg>
      </a>
    );
  }
}

export default Maximize;
