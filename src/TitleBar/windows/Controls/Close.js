import React, { Component } from 'react';
import Radium, { getState } from 'radium';
import WindowFocus from '../../../windowFocus';
import { themeContextTypes } from '../../../style/theme/windows';
import { backgroundContextTypes } from '../../../style/background/windows';
import { isDarkColor } from '../../../color';

const styles = {
  button: {
    WebkitUserSelect: 'none',
    userSelect: 'none',
    WebkitAppRegion: 'no-drag',
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
      backgroundColor: '#e81123',
    },

    ':active': {
      backgroundColor: '#f1707a',
    }
  },

  icon: {
    width: '10px',
    height: '10px'
  }
};

@WindowFocus()
@Radium
class Close extends Component {
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

    if (getState(this.state, null, ':active')) {
      svgFill = '#000000';
    } else if (getState(this.state, null, ':hover')) {
      svgFill = '#ffffff';
    }

    return (
      <a
        title="Close"
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={styles.icon}>
          <polygon
            fill={svgFill}
            points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "
          />
        </svg>
      </a>
    );
  }
}

export default Close;
