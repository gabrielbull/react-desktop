import React, { Component, PropTypes } from 'react';
import WindowFocus from '../../../windowFocus';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Radium
class Resize extends Component {
  static propTypes = {
    isFullscreen: PropTypes.bool,
    showIcon: PropTypes.bool
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
  }

  handleKeydown = e => {
    if (e.altKey) this.setState({ altKey: true });
  };

  handleKeyup = () => {
    if (this.state.altKey) this.setState({ altKey: false });
  };

  render() {
    let { style, onClick, onMaximizeClick, isWindowFocused, showIcon, ...props } = this.props;

    delete props.isFullscreen;

    let iconStyle = {
      ...styles.resize.icon,
      opacity: showIcon ? 1 : 0
    };

    let componentStyle = { ...styles.resize.button, ...style };
    if (!isWindowFocused && !showIcon) {
      componentStyle = { ...componentStyle, ...styles.resize.unfocused };
    }

    let icon;
    if (this.props.isFullscreen) {
      iconStyle = {
        ...iconStyle,
        width: '8px',
        height: '7.9px',
        marginTop: '1px',
        marginLeft: '1px'
      };

      icon = (
        <svg x="0px" y="0px" width="8px" height="7.9px" viewBox="0 0 8 7.9" style={iconStyle}>
          <path fill="#006400" d="M4.5,3.9H8L4,0v3.4C4.3,3.4,4.6,3.7,4.5,3.9z"/>
          <path fill="#006400" d="M3.5,4H0l4,3.9V4.5C3.7,4.5,3.5,4.3,3.5,4z"/>
        </svg>
      );
    } else if (this.state.altKey) {
      iconStyle = {
        ...iconStyle,
        width: '8px',
        height: '8px',
        marginTop: '1px',
        marginLeft: '1px'
      };

      onClick = onMaximizeClick;
      icon = (
        <svg x="0px" y="0px" width="8px" height="8px" viewBox="0 0 8 8" style={iconStyle}>
          <polygon
            fill="#006400"
            points="8,3.5 4.5,3.5 4.5,0 3.5,0 3.5,3.5 0,3.5 0,4.5 3.5,4.5 3.5,8 4.5,8 4.5,4.5 8,4.5 "
          />
        </svg>
      );
    } else {
      iconStyle = {
        ...iconStyle,
        width: '6px',
        height: '5.9px'
      };

      icon = (
        <svg x="0px" y="0px" width="6px" height="5.9px" viewBox="0 0 6 5.9" style={iconStyle}>
          <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"/>
          <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"/>
        </svg>
      );
    }

    return (
      <a
        style={componentStyle}
        onClick={onClick}
        {...props}
      >
        {icon}
      </a>
    );
  }
}

export default Resize;
