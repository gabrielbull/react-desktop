import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Margin, Padding, Alignment, Hidden, Background, Dimension } from '../../desktop-component';
import styles from './styles/osx.10.11';

@DesktopComponent(Margin, Padding, Alignment, Hidden, Background, Dimension)
class Text extends Component {
  static propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
  };

  render() {
    let { children, style, color, size, ...props } = this.props;
    let componentStyle = { ...styles.text, ...style };

    if (color) componentStyle = { ...componentStyle, color: color };

    if (props.horizontalAlignment) {
      componentStyle.textAlign = props.horizontalAlignment;
    }

    if (size) componentStyle.fontSize = size + 'px';

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
