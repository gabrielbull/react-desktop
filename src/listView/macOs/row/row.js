import React, { Component, PropTypes } from 'react';
import Background, { backgroundPropTypes } from '../../../style/background/macOs';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../../style/hidden';
import Margin, { marginPropTypes } from '../../../style/margin';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Background()
@Dimension()
@Hidden()
@Margin({ marginTop: '4px', marginBottom: '4px' })
@Padding({ paddingLeft: '18px', paddingRight: '18px', paddingTop: '5px', paddingBottom: '5px' })
class Row extends Component {
  static propTypes = {
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
  };

  render() {
    const { children, style, ...props } = this.props;

    return (
      <li style={{ ...styles.row, ...style }} {...props}>
        {children}
      </li>
    );
  }
}

export default Row;
