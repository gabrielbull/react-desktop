import React, { Component, PropTypes } from 'react';
import WindowFocus from '../../windowFocus';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Padding, { paddingPropTypes, removeDuplicatePaddingProps } from '../../style/padding';
import Margin, { marginPropTypes } from '../../style/margin';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Padding()
@Margin()
@Hidden()
@FontSize()
@Radium
class Button extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...fontSizePropTypes,
    ...paddingPropTypes,
    ...marginPropTypes,
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
        style={removeDuplicatePaddingProps(componentStyle, this.props)}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
