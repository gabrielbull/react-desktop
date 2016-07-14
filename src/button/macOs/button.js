import React, { Component, PropTypes } from 'react';
import WindowFocus from '../../windowFocus';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Hidden()
@Radium
class Button extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    type: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func
  };

  render() {
    let { style, type, children, color, onClick, isWindowFocused, ...props } = this.props;

    let componentStyle = { ...styles.button };
    if (color === 'blue' && isWindowFocused) {
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
