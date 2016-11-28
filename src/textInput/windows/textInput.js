import React, { Component, PropTypes } from 'react';
import Text from '../../text/windows/text';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Background, { backgroundPropTypes, removeBackgroundProps } from '../../style/background/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import { ColorContext, colorContextTypes } from '../../style/color/windows';
import styles from './styles/windows10';
import PlaceholderStyle from '../../placeholderStyle';
import Radium from 'radium';

@Hidden()
@Dimension()
@Margin()
@ColorContext()
@ThemeContext()
@Radium
class TextInput extends Component {
  static propTypes = {
    ...themePropTypes,
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    ...marginPropTypes,
    ...backgroundPropTypes,
    label: PropTypes.string,
    password: PropTypes.bool
  };

  static contextTypes = {
    ...themeContextTypes,
    ...colorContextTypes
  };

  get placeholderStyle() {
    return this.context.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  get value() {
    return this.refs.element.value;
  }

  set value(value) {
    this.refs.element.value = value;
  }

  render() {
    let { label, style, password, ...props } = this.props;
    let componentStyle = { ...styles.textBox, ...style };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.textBoxDarkTheme };
    }

    componentStyle[':focus'] = { ...componentStyle[':focus'], borderColor: this.context.color };

    props = removeBackgroundProps(props);

    const input = (
      <PlaceholderStyle placeholderStyle={this.placeholderStyle}>
        {Background(
          <input
            ref="element"
            type={`${password ? 'password' : 'text'}`}
            style={componentStyle}
            {...props}
          />,
          this.props
        )}
      </PlaceholderStyle>
    );

    if (label) {
      return (
        <div>
          <Text style={{ marginBottom: '5px' }}>
            {label}
          </Text>
          {input}
        </div>
      );
    }
    return input;
  }
}

export default TextInput;
