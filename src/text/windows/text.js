import React, { Component, PropTypes } from 'react';
import DesktopComponent, { Margin, Padding, Alignment, Hidden, Background, Dimension } from '../../desktopComponent';
import styles from './styles/windows10';

@DesktopComponent(Margin, Padding, Alignment, Hidden, Background, Dimension)
class Text extends Component {
  static propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  render() {
    let { children, style, color, ...props } = this.props;
    let componentStyle = { ...styles.text };

    color = color === true ? this.context.color : color ? color : '#000000';
    if (color) componentStyle = { ...componentStyle, color: color };
    else if (this.state.theme === 'dark') componentStyle = { ...componentStyle, color: '#ffffff' };

    if (props.horizontalAlignment) {
      componentStyle.textAlign = props.horizontalAlignment;
    }

    componentStyle = { ...componentStyle, ...style };

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
