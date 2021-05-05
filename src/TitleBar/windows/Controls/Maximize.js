import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    height: '10px'
  }
};

@WindowFocus()
@Radium
class Maximize extends Component {
  static contextTypes = {
    ...themeContextTypes,
    ...backgroundContextTypes,
    isMaximized: PropTypes.bool
  };

  render() {
    const { style, isWindowFocused, ...props } = this.props;

    delete props.onMaximizeClick;
    delete props.onRestoreDownClick;

    let svgFill = '#000000';
    if (!isWindowFocused && this.context.theme !== 'dark') {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    let componentStyle = { ...styles.button, ...style };
    if (this.context.theme === 'dark' || this.context.background && isDarkColor(this.context.background)) {
      svgFill = '#ffffff';
      componentStyle = { ...componentStyle, ...styles.buttonColorBackground };
    }

    let title = 'Maximize';
    let icon = (
      <svg x="0px" y="0px" viewBox="0 0 10.2 10.1" style={styles.icon}>
        <path
          fill={svgFill}
          d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"
        />
      </svg>
    );
    let onClick = this.props.onMaximizeClick;
    if (this.context.isMaximized) {
      title = 'Restore Down';
      icon = (
        <svg x="0px" y="0px" viewBox="0 0 10.2 10.2" style={styles.icon}>
          <path
            fill={svgFill}
            d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
          />
        </svg>
      );
      onClick = this.props.onRestoreDownClick;
    }

    return (
      <a
        title={title}
        style={componentStyle}
        onClick={onClick}
        {...props}
      >
        {icon}
      </a>
    );
  }
}

export default Maximize;
