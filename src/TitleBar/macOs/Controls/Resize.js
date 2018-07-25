import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowFocus from '../../../windowFocus';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Radium
class Resize extends Component {
  static propTypes = {
    isFullscreen: PropTypes.bool,
    showIcon: PropTypes.bool,
    disabled: PropTypes.bool,
    disableFullscreen: PropTypes.bool,
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
    let {
      style,
      onClick,
      onMaximizeClick,
      isWindowFocused,
      showIcon,
      disabled,
      disableFullscreen,
      ...props
    } = this.props;

    delete props.isFullscreen;

    let iconStyle = {
      ...styles.resize.icon,
      opacity: showIcon && !disabled ? 1 : 0
    };

    let componentStyle = { ...styles.resize.button, ...style };
    if (!isWindowFocused && !showIcon) {
      componentStyle = { ...componentStyle, ...styles.resize.unfocused };
    }
    if (disabled) {
      componentStyle = { ...componentStyle, ...styles.resize.disabled };
    }

    let icon;
    if (this.props.isFullscreen && !disableFullscreen) {
      icon = window && window.devicePixelRatio > 1.5 ? (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20" style={iconStyle}>
          <path fill="#006400" d="M8.7,10H1l9,8.8v-7.5C9.3,11.2,8.7,10.7,8.7,10z"/>
          <path fill="#006400" d="M11.3,10H19l-9-8.8v7.5C10.7,8.8,11.3,9.3,11.3,10z"/>
        </svg>
      ) : (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" style={iconStyle}>
          <path fill="#006400" d="M5,10c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z" />
          <path fill="#006400" d="M5,0c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z" />
        </svg>
      );
    } else if (this.state.altKey || disableFullscreen) {
      onClick = onMaximizeClick;
      icon = window && window.devicePixelRatio > 1.5 ? (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20" style={iconStyle}>
          <polygon fill="#006400" points="17.5,9 11,9 11,2.5 9,2.5 9,9 2.5,9 2.5,11 9,11 9,17.5 11,17.5 11,11 17.5,11 "/>
        </svg>
      ) : (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" style={iconStyle}>
          <path
            fill="#006400"
            d="M3.912,3.976c0.004,-0.615 0.013,-1.23 0.025,-1.844c0.004,-0.067 0.012,-0.132 0.027,-0.197c0.042,-0.17 0.127,-0.32 0.244,-0.449c0.028,-0.029 0.028,-0.029 0.057,-0.056c0.121,-0.105 0.26,-0.184 0.415,-0.225c0.09,-0.024 0.183,-0.035 0.276,-0.033c0.363,0.007 0.702,0.218 0.868,0.54c0.068,0.131 0.103,0.273 0.111,0.42c0.013,0.614 0.021,1.229 0.025,1.844c0.615,0.004 1.23,0.013 1.844,0.025c0.147,0.009 0.289,0.043 0.42,0.111c0.118,0.061 0.223,0.145 0.308,0.247c0.077,0.092 0.136,0.197 0.176,0.309c0.12,0.343 0.042,0.734 -0.202,1.003c-0.071,0.079 -0.155,0.146 -0.247,0.198c-0.14,0.08 -0.294,0.121 -0.455,0.13c-0.614,0.012 -1.229,0.021 -1.844,0.025c-0.004,0.615 -0.012,1.23 -0.025,1.844c-0.008,0.147 -0.043,0.289 -0.111,0.42c-0.061,0.118 -0.145,0.223 -0.247,0.308c-0.091,0.076 -0.197,0.136 -0.309,0.176c-0.343,0.12 -0.734,0.042 -1.003,-0.202c-0.079,-0.071 -0.146,-0.155 -0.198,-0.247c-0.08,-0.14 -0.121,-0.295 -0.13,-0.455c-0.012,-0.614 -0.021,-1.229 -0.025,-1.844c-0.615,-0.004 -1.229,-0.013 -1.844,-0.025c-0.16,-0.009 -0.314,-0.05 -0.455,-0.13c-0.08,-0.046 -0.154,-0.103 -0.219,-0.169c-0.255,-0.259 -0.349,-0.647 -0.242,-0.994c0.043,-0.141 0.118,-0.266 0.214,-0.377c0.028,-0.029 0.028,-0.029 0.056,-0.057c0.129,-0.117 0.28,-0.202 0.449,-0.244c0.065,-0.015 0.13,-0.023 0.197,-0.027c0.615,-0.012 1.229,-0.021 1.844,-0.025Z"
          />
        </svg>
      );
    } else {
      icon = window && window.devicePixelRatio > 1.5 ? (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 20 20" style={iconStyle}>
          <path fill="#006400" d="M5.3,16H13L4,7v7.7C4.6,14.7,5.3,15.4,5.3,16z"/>
          <path fill="#006400" d="M14.7,4H7l9,9V5.3C15.4,5.3,14.7,4.6,14.7,4z"/>
        </svg>
      ) : (
        <svg x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10" style={iconStyle}>
          <path fill="#006400" d="M2,3c0,0 0,2.744 0,4.167c0,0.221 0.088,0.433 0.244,0.589c0.156,0.156 0.368,0.244 0.589,0.244c1.423,0 4.167,0 4.167,0l-5,-5Z" />
          <path fill="#006400" d="M8,7c0,0 0,-2.744 0,-4.167c0,-0.221 -0.088,-0.433 -0.244,-0.589c-0.156,-0.156 -0.368,-0.244 -0.589,-0.244c-1.423,0 -4.167,0 -4.167,0l5,5Z" />
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
