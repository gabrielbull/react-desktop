import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import WindowState from '../../WindowState';

var styles = {
  button: {
    WebkitUserSelect: 'none',
    WebkitAppRegion: 'no-drag',
    cursor: 'default',
    width: '46px',
    height: '28px',
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

  constructor() {
    super();
    this.state = { windowFocused: true };
  }

  get styles() {
    return mergeStyles(styles.windows_10, this.props.style);
  }

  render() {
    const { style, ...props } = this.props;

    let svgFill = '#000000';
    if (!this.state.windowFocused) {
      svgFill = 'rgba(0, 0, 0, .4)';
    }

    return (
      <a
        data-style={applyStyle(styles.button)}
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
