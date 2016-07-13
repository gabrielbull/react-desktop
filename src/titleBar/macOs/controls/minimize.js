import React, { Component, PropTypes } from 'react';
import WindowFocus from '../../../windowFocus';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Radium
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object,
    showIcon: PropTypes.bool
  };

  render() {
    const { style, isWindowFocused, showIcon, ...props } = this.props;

    delete props.isFullscreen;

    const iconStyle = {
      ...styles.minimize.icon,
      opacity: showIcon ? 1 : 0
    };

    let componentStyle = { ...styles.minimize.button, ...style };
    if (!isWindowFocused && !showIcon) {
      componentStyle = { ...componentStyle, ...styles.minimize.unfocused };
    }

    return (
      <a
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" width="8px" height="1.1px" viewBox="0 0 8 1.1" style={iconStyle}>
          <rect fill="#995700" width="8" height="1.1"/>
        </svg>
      </a>
    );
  }
}

export default Minimize;
