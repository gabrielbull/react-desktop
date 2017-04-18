import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Background, { backgroundPropTypes } from '../../style/background/windows';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import { colorContextTypes } from '../../style/color/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import styles from './styles/windows10';

@Margin()
@Padding()
@Alignment()
@Hidden()
@Background()
@Dimension()
@ThemeContext()
class Text extends Component {
  static propTypes = {
    ...themePropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  static contextTypes = {
    ...colorContextTypes,
    ...themeContextTypes
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.text };

    color = color === true ? this.context.color : color ? color : '#000000';
    if (color) componentStyle = { ...componentStyle, color: color };
    else if (this.context.theme === 'dark') componentStyle = { ...componentStyle, color: '#ffffff' };

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
