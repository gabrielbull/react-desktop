import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../Styling';
import Button from './Button';
import WindowState from '../WindowState';

var styles = {
  osx_10_11: {
    backgroundColor: '#ffbd2e',
    borderColor: '#e1a116',

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0',
    },

    icon: {
      width: '8px',
      height: '8px',
      marginTop: '1px',
      marginLeft: '1px'
    },

    ':active': {
      backgroundColor: '#bf9123',
      borderColor: '#ad7d15'
    }
  }
};

@Button
@WindowState
@Styling
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { iconVisible: false, windowFocused: true };
  }

  get styles() {
    return mergeStyles(styles.osx_10_11, this.props.style);
  }

  render() {
    const displayIcon = this.state.iconVisible ? { opacity: 1 } : { opacity: 0 };
    const iconStyle = Object.assign({}, this.styles.icon, displayIcon);

    let styles = this.styles;
    if (!this.state.windowFocused && !this.state.iconVisible) {
      styles = mergeStyles(styles, styles.unfocused)
    }

    return (
      <div style={applyStyle(styles)}>
        <svg x="0px" y="0px" viewBox="0 0 8 1.1" style={iconStyle}>
          <rect fill="#995700" width="8" height="1.1"/>
        </svg>
      </div>
    );
  }
}

export default Minimize;
