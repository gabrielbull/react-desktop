import React, { Component, PropTypes } from 'react';
import DesktopComponent, {
  Dimension,
  Margin,
  Padding,
  Alignment,
  Hidden,
  Background
} from '../desktopComponent';

var styles = {
  flexGrow: '1',
  display: 'flex'
};

@DesktopComponent(Dimension, Margin, Padding, Alignment, Hidden, Background)
class View extends Component {
  static propTypes = {
    direction: PropTypes.string
  };

  static defaultProps = {
    direction: 'column'
  };

  render() {
    const { horizontalAlignment, children, style, ...props } = this.props;
    let componentStyle = { ...styles, ...style };

    if (this.props.direction === 'column') {
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
