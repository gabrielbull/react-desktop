import React, { Component, PropTypes } from 'react';
import Margin from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import FontSize from '../../style/fontSize';
import Dimension from '../../style/dimension';
import TextAlign from '../../style/textAlign';
import Hidden from '../../style/hidden';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { macOsBackgroundPropTypes } from '../../style/background';
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
    color: PropTypes.string,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...macOsBackgroundPropTypes
  };

  static defaultProps = {
    color: '#000000'
  };

  render() {
    const { color, children, style, ...props } = this.props;

    return (
      <div style={{ ...styles.text, color, ...style }} {...props}>
        {children}
      </div>
    );

  }
}

export default Text;
