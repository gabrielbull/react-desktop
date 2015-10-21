import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import WindowState from '../../WindowState';

var styles = {
  button: {
    WebkitUserSelect: 'none',
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

@WindowState
@Styling
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  static contextTypes = {
    theme: PropTypes.string,
    background: PropTypes.string
  };

  constructor() {
    super();
    this.state = { windowFocused: true };
  }

  render() {
    const { style, ...props } = this.props;

    let svgFill = '#000000';
    if (!this.state.windowFocused) {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    let cssStyle = styles.button;
    if (this.context.theme === 'dark' || this.context.background) {
      svgFill = '#ffffff';
      cssStyle = mergeStyles(cssStyle, styles.buttonColorBackground);
    }

    return (
      <a
        data-style={applyStyle(cssStyle)}
        style={style}
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
