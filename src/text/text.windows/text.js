import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Margin, Padding, Alignment, Hidden, Background, Dimension } from '../../desktop-component';
import styles from './styles/windows.10';

@DesktopComponent(Margin, Padding, Alignment, Hidden, Background, Dimension)
class Text extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.textBlock, ...style };

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

    if (props.horizontalAlignment) {
      componentStyle.textAlign = props.horizontalAlignment;
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

export default Text;
