import React, { Component, PropTypes } from 'react';
import DesktopComponent, {
  Dimension,
  Margin,
  Padding,
  Alignment,
  Hidden,
  Background
} from '../desktopComponent';
import Width from '../style/width';

var styles = {
  display: 'flex'
};

@Width()
@DesktopComponent(Dimension, Margin, Padding, Alignment, Hidden, Background)
class View extends Component {
  static propTypes = {
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
