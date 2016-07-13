import React, { Component, PropTypes } from 'react';
import WindowFocus from '../../../windowFocus';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Radium
class Close extends Component {
  static propTypes = {
    style: PropTypes.object,
    showIcon: PropTypes.bool
  };

  render() {
    const { style, isWindowFocused, showIcon, ...props } = this.props;

    delete props.isFullscreen;

    const iconStyle = {
      ...styles.close.icon,
      opacity: showIcon ? 1 : 0
    };

    let componentStyle = { ...styles.close.button, ...style };
    if (!isWindowFocused && !showIcon) {
      componentStyle = { ...componentStyle, ...styles.close.unfocused };
    }

    return (
      <a
        style={componentStyle}
        {...props}
      >
        <svg x="0px" y="0px" width="6px" height="6px" viewBox="0 0 6 6" style={iconStyle}>
          <polygon fill="#4d0000" points="6,0.8 5.2,0 3,2.2 0.8,0 0,0.8 2.2,3 0,5.2 0.8,6 3,3.8 5.2,6 6,5.2 3.8,3 "/>
        </svg>
      </a>
    );
  }
}

export default Close;
