import React, { Component, PropTypes } from 'react';
import Text from '../../text/windows/text';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import Dimension, { dimensionPropTypes } from '../../style/dimension';
import Margin, { marginPropTypes } from '../../style/margin';
import Background, { backgroundPropTypes, removeBackgroundProps } from '../../style/background/windows';
import { ThemeContext, themeContextTypes } from '../../style/theme/windows';
import { colorContextTypes } from '../../style/color/windows';
import styles from './styles/windows10';
import PlaceholderStyle from '../../placeholderStyle';

@Hidden()
@Dimension()
@Margin()
@ThemeContext()
class TextInput extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...dimensionPropTypes,
    ...marginPropTypes,
    ...backgroundPropTypes,
    label: PropTypes.string
  };

  static contextTypes = {
    ...themeContextTypes,
    ...colorContextTypes
  };

  get placeholderStyle() {
    return this.context.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  get value() {
    return this.refs.input.value;
  }

  render() {
    let { label, style, ...props } = this.props;
    let componentStyle = { ...styles.textBox, ...style };

    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.textBoxDarkTheme };
    }

    componentStyle[':focus'] = { ...componentStyle[':focus'], borderColor: this.context.color };

    const input = (
      <PlaceholderStyle placeholderStyle={this.placeholderStyle}>
        {Background(
          <input
            ref="input"
            type="text"
            style={componentStyle}
            {...props}
          />,
          this.props
        )}
      </PlaceholderStyle>
    );

    props = removeBackgroundProps(props);

    if (label) {
      return (
        <div {...props}>
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
