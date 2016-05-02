import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Margin, Padding, Alignment, Hidden, Background, Dimension } from '../../desktopComponent';
import styles from './styles/windows10';

@DesktopComponent(Margin, Padding, Alignment, Hidden, Background, Dimension)
class Text extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.text, ...style };

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
        style={componentStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Text;
