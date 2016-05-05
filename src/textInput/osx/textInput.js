import React, { Component, PropTypes } from 'react';
import DesktopComponent, { PlaceholderStyle, Dimension, Hidden, Margin } from '../../desktopComponent';
import { StyleRoot, keyframes, getState } from 'radium';
import styles from './styles/osx10_11';
import Label from '../../label/osx/label';

const animation = keyframes(
  {
    '0%': {
      opacity: '0',
      borderWidth: '34px',
      top: '-34px',
      left: '-34px'
    },
    '32%': {
      opacity: '0',
      borderRadius: '10px',
      borderWidth: '30px',
      top: '-30px',
      left: '-30px'
    },
    '50%': {
      opacity: '.2',
      borderWidth: '15px',
      top: '-15px',
      left: '-15px'
    },
    '80%': {
      opacity: '.4',
      borderWidth: '9px',
      top: '-9px',
      left: '-9px'
    },
    '90%': {
      opacity: '.9',
      borderWidth: '6px',
      top: '-6px',
      left: '-6px'
    },
    '100%': {
      opacity: '1',
      top: '-3px',
      left: '-3px',
      borderRadius: '4px',
      borderWidth: '3px'
    }
  },
  'text-input-focus'
);

@DesktopComponent(PlaceholderStyle, Hidden, Dimension, Margin)
class TextFieldOSX extends Component {
  static propTypes = {
    label: PropTypes.string
  };

  getPlaceholderStyle() {
    return styles.textField[':placeholder'];
  }

  get value() {
    return this.refs.element.value;
  }

  set value(value) {
    this.refs.element.value = value;
  }

  render() {
    const { style, width, label, margin, ...props } = this.props;

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

    let labelComponent = label ? <Label margin="0 0 3px 0">{label}</Label> : null;

    return (
      <div style={styles.container} {...{ width, margin }}>
        {labelComponent}
        <div style={styles.wrapper}>
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
      </div>
    );
  }
}

export default TextFieldOSX;
