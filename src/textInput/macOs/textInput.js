import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Radium, { StyleRoot, keyframes } from 'radium';
import styles from './styles/10.11';
import Label from '../../label/macOs/label';
import Hidden, { hiddenPropTypes, removeHiddenProps } from '../../style/hidden';
import Margin, { marginPropTypes, removeMarginProps } from '../../style/margin';
import Dimension, { dimensionPropTypes, removeDimensionProps } from '../../style/dimension';
import FontSize, { fontSizePropTypes, removeFontSizeProps } from '../../style/fontSize';
import PlaceholderStyle from '../../placeholderStyle';
import mapStyles from '../../utils/mapStyles';
import { parseDimension } from '../../styleHelper';

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
@Dimension()
@Radium
class TextFieldOSX extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...marginPropTypes,
    ...dimensionPropTypes,
    ...fontSizePropTypes,
    label: PropTypes.string,
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  };

  static mapStyles = {
    container: ['margin', 'width', 'height', 'display']
  };

  constructor() {
    super();
    this.state = {
      isFocused: false
    };
  }

  get value() {
    return this.refs.element.value;
  }

  set value(value) {
    this.refs.element.value = value;
  }

  componentDidMount() {
    const el = ReactDOM.findDOMNode(this).getElementsByTagName('INPUT')[0];
    el.addEventListener('blur', this.handleBlur);
    el.addEventListener('focus', this.handleFocus);
  }

  componentWillUnmount() {
    const el = ReactDOM.findDOMNode(this).getElementsByTagName('INPUT')[0];
    el.removeEventListener('blur', this.handleBlur);
    el.removeEventListener('focus', this.handleFocus);
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleFocus = () => {
    setTimeout(() => this.setState({ isFocused: true }));
  };

  render() {
    let { style, label, size, rounded, ...props } = this.props;

    let [inputStyle, containerStyle] = mapStyles(style, TextFieldOSX.mapStyles);

    let componentStyle = { ...styles.textField };

    let focusElement;
    if (this.state.isFocused) {
      componentStyle = { ...componentStyle, ...styles.textFieldFocus };

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

    props = removeFontSizeProps(removeDimensionProps(removeMarginProps(removeHiddenProps(props))));

    if (rounded && rounded === true) {
      componentStyle.borderRadius = '3px';
    } else if (rounded) {
      componentStyle.borderRadius = parseDimension(rounded);
    }

    if (size && parseInt(size) !== 13) {
      const ratio = size / 13;
      componentStyle.lineHeight = parseDimension(size * 1.4);
      componentStyle.paddingLeft = parseDimension(3.5 * ratio);
      componentStyle.paddingRight = parseDimension(3.5 * ratio);
    }

    const input = FontSize(
      <input
        key="element"
        ref="element"
        type="text"
        style={componentStyle}
        {...props}
      />,
      this.props
    );

    return (Margin(
      <div style={{ ...styles.container, ...(this.state.isFocused ? styles.containerFocus : {}), ...containerStyle }}>
        {labelComponent}
        <div style={styles.wrapper}>
          <StyleRoot>
            {focusElement}
          </StyleRoot>
          <PlaceholderStyle placeholderStyle={styles.textField[':placeholder']}>
            {cloneElement(input, { ...input.props, style: { ...input.props.style, ...inputStyle } })}
          </PlaceholderStyle>
        </div>
      </div>,
      this.props
    ));
  }
}

export default TextFieldOSX;
