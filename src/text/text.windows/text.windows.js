import React, { Component, PropTypes } from 'react';
import DesktopComponent from '../DesktopComponent';

var styles = {
  textBlock: {
    WebkitUserSelect: 'none',
    cursor: 'default',
    lineHeight: '25.96px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    whiteSpace: 'nowrap'
  },

  rowLabel: {
    textAlign: 'right',
    marginRight: '12px'
  }
};

@DesktopComponent
class TextBlockWindows extends Component {
  static propTypes = {
    color: PropTypes.string,
    align: PropTypes.string
  };

  render() {
    let { children, style, color, align, ...props } = this.props;
    let componentStyle = {
      ...styles.textBlock,
      ...style,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    };

    if (color) {
      switch (color) {
      case 'red':
        color = this.state.theme === 'dark' ? '#c92e00' : '#c50500';
        break;
      }
      componentStyle = { ...componentStyle, color: color };
    } else if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, color: '#ffffff' };
    }

    if (align) {
      componentStyle = { ...componentStyle, textAlign: align };
    }

    return (
      <div
        ref="label"
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default TextBlockWindows;
