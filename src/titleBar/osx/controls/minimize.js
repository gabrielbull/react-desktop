import React, { Component, PropTypes } from 'react';
import DesktopComponent, { WindowFocus } from '../../../desktopComponent';
import styles from './styles/osx10_11';

@DesktopComponent(WindowFocus)
class Minimize extends Component {
  static propTypes = {
    style: PropTypes.object
  };

  constructor() {
    super();
    this.state = { iconVisible: false };
  }

  render() {
    const { style, ...props } = this.props;

    const iconStyle = {
      ...styles.minimize.icon,
      opacity: this.state.iconVisible ? 1 : 0
    };

    let componentStyle = { ...styles.minimize.button, ...style };
    if (!this.state.windowFocused && !this.state.iconVisible) {
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
