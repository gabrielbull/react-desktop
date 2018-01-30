import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/10.11';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import { backgroundPropTypes } from '../../style/background/macOs';
import { convertColor, darkenColor } from '../../color';
import Text from '../../Text/macOs';

@Dimension()
@Margin()
@Padding()
@Alignment()
@Hidden()
class Box extends Component {
  static propTypes = {
    ...backgroundPropTypes,
    ...dimensionPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    ...alignmentPropTypes,
    ...hiddenPropTypes,
    label: PropTypes.string
  };

  static styleRefs = {
    padding: 'box',
    dimension: 'box'
  };

  render() {
    let { children, style, background, label, ...props } = this.props;
    const hasSegmentedControls = false;

    let componentStyle = { ...styles.box, ...style };
    if (hasSegmentedControls) {
      componentStyle = { ...styles.segmentedControls };
    }

    if (background) {
      background = convertColor(background);
      componentStyle = {
        ...componentStyle,
        backgroundColor: background,
        borderTopColor: darkenColor(background, 0.3),
        borderLeftColor: darkenColor(background, 0.24),
        borderRightColor: darkenColor(background, 0.24),
        borderBottomColor: darkenColor(background, 0.19)
      };
    }

    if (label) {
      return (
        <div style={styles.wrapper} {...props}>
          <Text margin="0 0 1px 7px" size={11}>
            {label}
          </Text>
          <div ref="box" style={componentStyle}>
            {children}
          </div>
        </div>
      );
    }
    componentStyle = { ...styles.wrapper, ...componentStyle };
    return (
      <div ref="box" style={componentStyle} {...props}>
        {children}
      </div>
    );
  }
}

export default Box;
