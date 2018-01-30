import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Width, { widthPropTypes } from '../../style/width';
import Margin, { marginPropTypes } from '../../style/margin';
import Padding, { paddingPropTypes } from '../../style/padding';
import Alignment, { alignmentPropTypes } from '../../style/alignment';
import Background, { backgroundContextTypes } from '../../style/background/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import { ColorContext } from '../../style/color/windows';
import { ThemeContext } from '../../style/theme/windows';

var styles = {
  display: 'flex',
  position: 'relative'
};

@Width()
@Dimension()
@Alignment()
@Margin()
@Padding()
@Background()
@Hidden()
@ColorContext()
@ThemeContext()
class View extends Component {
  static propTypes = {
    ...alignmentPropTypes,
    ...widthPropTypes,
    ...marginPropTypes,
    ...paddingPropTypes,
    ...backgroundContextTypes,
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    direction: PropTypes.string,
    layout: PropTypes.string
  };

  static defaultProps = {
    layout: 'horizontal'
  };

  render() {
    let { horizontalAlignment, children, style, direction, layout, ...props } = this.props;

    let componentStyle = { ...styles, ...style };

    if (direction) {
      // direction will be deprecated on v0.3 and a warning will be shown
      layout = direction === 'column' ? 'vertical' : 'horizontal';
    }

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
      <div
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default View;
