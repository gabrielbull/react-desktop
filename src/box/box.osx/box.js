import React, { Component, PropTypes } from 'react';
import styles from './styles/osx.10.11';
import DesktopComponent, {
  Dimension,
  Margin,
  Padding,
  Alignment,
  Hidden,
  Background
} from '../../desktop-component';
import { convertColor, darkenColor } from '../../color';
import Text from '../../text/text.osx/text';

@DesktopComponent(Dimension, Margin, Padding, Alignment, Hidden, Background)
class Box extends Component {
  static propTypes = {
    label: PropTypes.string
  };

  static styleRefs = {
    padding: 'box',
    dimension: 'box'
  };

  render() {
    let { children, style, background, label, ...props } = this.props;
    const hasSegmentedControls = false;

    let componentStyle = { ...styles.box ,...style };
    if (hasSegmentedControls) {
      componentStyle = { ...styles.segmentedControls };
    }

    if (background) {
      background = convertColor(background);
      componentStyle = {
        ...componentStyle,
        backgroundColor: background,
        borderTopColor: darkenColor(background, .3),
        borderLeftColor: darkenColor(background, .24),
        borderRightColor: darkenColor(background, .24),
        borderBottomColor: darkenColor(background, .19)
      };
    }

    if (label) {
      return (
        <div {...props}>
          <Text margin="0 0 1px 7px" size={11}>{label}</Text>
          <div
            ref="box"
            style={componentStyle}
          >
            {children}
          </div>
        </div>
      );
    }
    return (
      <div
        ref="box"
        style={componentStyle}
        {...props}
      >
        {children}
      </div>

    );
  }
}

export default Box;
