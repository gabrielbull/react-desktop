import React, { Component, PropTypes } from 'react';
import Text from '../../text/windows/text';
import DesktopComponent, { PlaceholderStyle, Hidden, Background } from '../../desktopComponent';
import styles from './styles/windows10';

@DesktopComponent(PlaceholderStyle, Hidden, Background)
class TextInput extends Component {
  static styleRefs = {
    background: 'input'
  };

  static propTypes = {
    label: PropTypes.string
  };

  getPlaceholderStyle() {
    return this.state.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  get value() {
    return this.refs.input.value;
  }

  render() {
    const { label, style, ...props } = this.props;
    let componentStyle = { ...styles.textBox, ...style };

    if (this.state.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.textBoxDarkTheme };
    }

    componentStyle[':focus'] = { ...componentStyle[':focus'], borderColor: this.state.color };

    const input = (
      <input
        ref="input"
        type="text"
        style={componentStyle}
        {...props}
      />
    );

    if (label) {
      return (
        <div {...this.props}>
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
