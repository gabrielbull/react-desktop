import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../DesktopComponent';

var styles = {
  grid: {
    userSelect: 'none',
    flex: '1',
    display: 'flex'
  }
};

@DesktopComponent
class Grid extends Component {
  static propTypes = {
    margin: PropTypes.string,
    padding: PropTypes.string,
    align: PropTypes.string,
    verticalAlign: PropTypes.string
  };

  render() {
    const { children, style, margin, padding, align, verticalAlign, ...props } = this.props;

    let componentStyle = {
      ...styles.grid,
      margin: margin,
      padding: padding
    };

    switch (align) {
    case 'center':
      componentStyle.justifyContent = 'center';
      break;
    case 'left':
      componentStyle.justifyContent = 'flex-start';
      break;
    case 'right':
      componentStyle.justifyContent = 'flex-end';
      break;
    }

    switch (verticalAlign) {
    case 'center':
      componentStyle.alignItems = 'center';
      break;
    case 'top':
      componentStyle.alignItems = 'flex-start';
      break;
    case 'bottom':
      componentStyle.alignItems = 'flex-end';
      break;
    }

    componentStyle = {...componentStyle, ...style};

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

export default Grid;
