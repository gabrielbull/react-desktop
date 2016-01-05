import React, { Component } from 'react';
import DesktopComponent, {
  Dimension,
  Margin,
  Padding,
  Alignment,
  Hidden
} from '../../desktop-component';

var styles = {
  userSelect: 'none',
  flex: '1',
  display: 'flex'
};

@DesktopComponent(Dimension, Margin, Padding, Alignment, Hidden)
class View extends Component {
  render() {
    const { children, style, ...props } = this.props;

    return (
      <div
        style={{ ...styles, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default View;
