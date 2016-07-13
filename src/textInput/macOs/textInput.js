import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot, keyframes, getState } from 'radium';
import styles from './styles/10.11';
import Label from '../../label/osx/label';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Margin, { marginPropTypes } from '../../style/margin';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import PlaceholderStyle from '../../placeholderStyle';

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

@Hidden()
@Margin()
@Dimension()
@Radium
class TextFieldOSX extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...dimensionPropTypes,
    label: PropTypes.string
  };

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
          <PlaceholderStyle placeholderStyle={styles.textField[':placeholder']}>
            <input
              key="element"
              ref="element"
              type="text"
              style={componentStyle}
              {...props}
            />
          </PlaceholderStyle>
        </div>
      </div>
    );
  }
}

export default TextFieldOSX;
