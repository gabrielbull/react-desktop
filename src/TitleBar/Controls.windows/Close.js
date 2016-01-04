import React, { Component } from 'react';
import { getState } from 'radium';
import DesktopComponent, { WindowFocus } from '../../DesktopComponent';
import { isDarkColor } from '../../Color';

const styles = {
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

@DesktopComponent(WindowFocus)
class Close extends Component {
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

    if (getState(this.state, null, ':active')) {
      svgFill = '#000000';
    } else if (getState(this.state, null, ':hover')) {
      svgFill = '#ffffff';
    }

    return (
      <a
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
