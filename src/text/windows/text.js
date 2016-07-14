import React, { Component, PropTypes } from 'react';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Background, { windowsBackgroundPropTypes } from '../../style/background';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import { colorContextTypes } from '../../style/color';
import styles from './styles/windows10';

@Margin()
@Padding()
@Alignment()
@Hidden()
@Background()
@Dimension()
class Text extends Component {
  static propTypes = {
    ...marginPropTypes,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    ...windowsBackgroundPropTypes,
    ...dimensionPropTypes,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  static contextTypes = {
    ...colorContextTypes
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.text };

    color = color === true ? this.context.color : color ? color : '#000000';
    if (color) componentStyle = { ...componentStyle, color: color };
    else if (this.state.theme === 'dark') componentStyle = { ...componentStyle, color: '#ffffff' };

    if (props.horizontalAlignment) {
      componentStyle.textAlign = props.horizontalAlignment;
    }

    componentStyle = { ...componentStyle, ...style };

    return (
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Text;
