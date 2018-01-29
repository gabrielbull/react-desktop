import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Background, { backgroundPropTypes } from '../../../style/background/macOs';
import Alignment, { alignmentPropTypes } from '../../../style/alignment';
import Dimension, { dimensionPropTypes } from '../../../style/dimension';
import Hidden, { hiddenPropTypes } from '../../../style/hidden';
import Margin, { marginPropTypes } from '../../../style/margin';
import Padding, { paddingPropTypes } from '../../../style/padding';
import styles from './style/10.11';

@Background()
@Alignment()
@Dimension()
@Hidden()
@Margin({ marginTop: '4px', marginBottom: '4px' })
@Padding({ paddingLeft: '18px', paddingRight: '18px', paddingTop: '5px', paddingBottom: '5px' })
class Row extends Component {
  static propTypes = {
    ...backgroundPropTypes,
    ...alignmentPropTypes,
    ...dimensionPropTypes,
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    layout: PropTypes.string
  };

  static defaultProps = {
    layout: 'horizontal'
  };

  render() {
    const { horizontalAlignment, children, style, layout, ...props } = this.props;

    let componentStyle = { ...styles.row };

    if (layout === 'vertical') {
      componentStyle.flexDirection = 'column';
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.alignItems = 'center'; break;
        case 'left': componentStyle.alignItems = 'flex-start'; break;
        case 'right': componentStyle.alignItems = 'flex-end'; break;
        }
      }
    } else {
      if (horizontalAlignment) {
        switch(horizontalAlignment) {
        case 'center': componentStyle.justifyContent = 'center'; break;
        case 'left': componentStyle.justifyContent = 'flex-start'; break;
        case 'right': componentStyle.justifyContent = 'flex-end'; break;
        }
      }
    }

    return (
      <li style={{ ...styles.row, ...style }} {...props}>
        {children}
      </li>
    );
  }
}

export default Row;
