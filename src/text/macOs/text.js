import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import TextAlign, { textAlignPropTypes } from '../../style/textAlign';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { backgroundPropTypes } from '../../style/background/macOs';
import styles from './styles/10.11';

@Background()
@Alignment()
@Margin()
@Padding()
@FontSize()
@Dimension()
@TextAlign()
@Hidden()
class Text extends Component {
  static propTypes = {
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...backgroundPropTypes,
    ...hiddenPropTypes,
    ...textAlignPropTypes,
    ...marginPropTypes,
    ...fontSizePropTypes,
    ...dimensionPropTypes,
    color: PropTypes.string,
    bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    color: '#000000'
  };

  render() {
    const { color, children, style, bold, ...props } = this.props;

    let componentStyle = { ...styles.text, color };
    if (bold && bold === true) {
      componentStyle = { ...componentStyle, fontWeight: 'bold' };
    } else if (bold) {
      componentStyle = { ...componentStyle, fontWeight: bold };
    }

    return (
      <span style={{ ...componentStyle, ...style }} {...props}>
        {children}
      </span>
    );

  }
}

export default Text;
