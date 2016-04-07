import React, { Component, PropTypes } from 'react';
import DesktopComponent, { PlaceholderStyle, Hidden, Background } from '../../desktop-component';
import styles from './styles/osx.10.11';

@DesktopComponent(PlaceholderStyle, Hidden, Background)
class TextFieldOSX extends Component {
  render() {
    const { style, ...props } = this.props;

    let componentStyle = { ...style, ...styles.textField };

    return (
      <input
        ref="element"
        type="text"
        style={componentStyle}
        {...props}
      />
    );
  }
}

export default TextFieldOSX;
