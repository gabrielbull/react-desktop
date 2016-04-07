import React, { Component, PropTypes } from 'react';
import DesktopComponent, { PlaceholderStyle, Hidden, Background } from '../../desktop-component';
import { StyleRoot, keyframes, getState } from 'radium';
import styles from './styles/osx.10.11';

const animation = keyframes(
  {
    '0%': {
      opacity: '0',
      transform: 'scale(1.4, 3)'
    },
    '32%': {
      opacity: '0',
      borderRadius: '10px',
      transform: 'scale(1.35, 2.8)'
    },
    '50%': {
      opacity: '.2',
      transform: 'scale(1.15, 1.6)'
    },
    '80%': {
      opacity: '.4',
      transform: 'scale(1.08, 1.2)'
    },
    '90%': {
      opacity: '.9',
      transform: 'scale(1.04, 1.1)'
    },
    '100%': {
      opacity: '1',
      borderRadius: '4px',
      transform: 'scale(1, 1)'
    }
  },
  'text-input-focus'
);

@DesktopComponent(PlaceholderStyle, Hidden, Background)
class TextFieldOSX extends Component {
  getPlaceholderStyle() {
    return styles.textField[':placeholder'];
  }

  render() {
    const { style, ...props } = this.props;

    let componentStyle = { ...style, ...styles.textField };

    let focusElement;
    if (getState(this.state, 'element', ':focus')) {
      let focusElementStyle = {
        ...styles.focusElement,
        animation: 'x .25s linear forwards',
        animationName: animation
      };
      focusElement = (
        <div style={focusElementStyle}/>
      );
    }

    return (
      <div style={styles.container}>
        <StyleRoot>
          {focusElement}
        </StyleRoot>
        <input
          key="element"
          ref="element"
          type="text"
          style={componentStyle}
          {...props}
        />
      </div>
    );
  }
}

export default TextFieldOSX;
