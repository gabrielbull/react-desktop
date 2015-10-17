import React, { Component, PropTypes } from 'react';
import Styling, { mergeStyles, applyStyle } from '../../Styling';
import Button from './Button';
import WindowState from '../../WindowState';

var styles = {
  osx_10_11: {
    backgroundColor: '#28c940',
    borderColor: '#12ac28',

    unfocused: {
      backgroundColor: '#dddddd',
      borderColor: '#d0d0d0'
    },

    icon: {
      width: '6px',
      height: '6px',
      marginTop: '2px',
      marginLeft: '2px'
    },

    ':active': {
      backgroundColor: '#1f9a31',
      borderColor: '#128622'
    }
  }
};

@Button
@WindowState
@Styling
class Resize extends Component {
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
    const { style, ...props } = this.props;
    const displayIcon = this.state.iconVisible ? { opacity: 1 } : { opacity: 0 };
    const iconStyle = mergeStyles(this.styles.icon, displayIcon);

    let styles = this.styles;
    if (!this.state.windowFocused && !this.state.iconVisible) {
      styles = mergeStyles(styles, styles.unfocused)
    }

    return (
      <a style={applyStyle(styles)} {...props}>
        <svg x="0px" y="0px" viewBox="0 0 6 5.9"  style={iconStyle}>
          <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"/>
          <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"/>
        </svg>
      </a>
    );
  }
}

export default Resize;
