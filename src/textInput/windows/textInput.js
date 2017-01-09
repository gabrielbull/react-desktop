import React, { Component, PropTypes } from 'react';
import Text from '../../text/windows/text';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import ValueRef from '../../ValueRef';
import Background, { backgroundPropTypes, removeBackgroundProps } from '../../style/background/windows';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import { ColorContext, colorContextTypes } from '../../style/color/windows';
import styles from './styles/windows10';
import PlaceholderStyle from '../../placeholderStyle';
import Radium from 'radium';

@ValueRef()
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
    labelColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    labelStyle: PropTypes.object,
    password: PropTypes.bool
  };

  static contextTypes = {
    ...themeContextTypes,
    ...colorContextTypes
  };

  get placeholderStyle() {
    return this.context.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  render() {
    let { label, labelColor, labelStyle, style, password, ...props } = this.props;
    let componentStyle = { ...styles.textBox, ...style };

    if (this.context.theme === 'dark') {
      labelStyle = { ...styles.labalDarkTheme, ...labelStyle };
      componentStyle = { ...componentStyle, ...styles.textBoxDarkTheme };
    }

    labelColor = labelColor === true ? this.context.color : labelColor ? labelColor : this.context.theme === 'dark' ? '#FFFFFF' : null;
    if (labelColor) labelStyle = { color: labelColor, ...labelStyle };

    componentStyle[':focus'] = { ...componentStyle[':focus'], borderColor: this.context.color };

    props = removeBackgroundProps(props);

    const input = (
      <PlaceholderStyle placeholderStyle={this.placeholderStyle}>
        {Background(
          <input
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
          <Text style={{ marginBottom: '5px', ...labelStyle }} color={this.context.theme === 'dark' ? '#FFFFFF' : null}>
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
