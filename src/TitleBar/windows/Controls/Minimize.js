import React, { Component } from 'react';
import WindowFocus from '../../../windowFocus';
import { themeContextTypes } from '../../../style/theme/windows';
import { backgroundContextTypes } from '../../../style/background/windows';
import { isDarkColor } from '../../../color';
import Radium from 'radium'

var styles = {
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
    appRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '100%',
    lineHeight: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

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
    height: '1px'
  }
};

@WindowFocus()
@Radium
class Minimize extends Component {
  static contextTypes = {
    ...themeContextTypes,
    ...backgroundContextTypes
  };

  render() {
    const { style, isWindowFocused, ...props } = this.props;

    let svgFill = '#000000';
    if (!isWindowFocused && this.context.theme !== 'dark') {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    let componentStyle = { ...styles.button, ...style };
    if (this.context.theme === 'dark' || this.context.background && isDarkColor(this.context.background)) {
      svgFill = '#ffffff';
      componentStyle = { ...componentStyle, ...styles.buttonColorBackground };
    }

    return (
      <a
        title="Minimize"
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
