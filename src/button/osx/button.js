import React, { Component, PropTypes } from 'react';
import DesktopComponent, { WindowFocus, Hidden } from '../../desktopComponent';
import styles from './styles/osx10_11';

@DesktopComponent(WindowFocus, Hidden)
class Button extends Component {
  isbutton = true;

  static propTypes = {
    type: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func
  };

  render() {
    let { style, type, children, color, onClick, ...props } = this.props;

    let componentStyle = { ...styles.button };
    if (color === 'blue' && this.state.windowFocused) {
      componentStyle = { ...componentStyle, ...styles.blue };
    }

    componentStyle = { ...componentStyle, ...style };

    return (
      <button
        ref="element"
        type={type || 'button'}
        onClick={onClick}
        style={componentStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
