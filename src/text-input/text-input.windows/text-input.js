import React, { Component, PropTypes } from 'react';
import Text from '../../text/text.windows/text';
import DesktopComponent, { PlaceholderStyle, Hidden, Background } from '../../desktop-component';
import styles from './styles/windows.10';

@DesktopComponent(PlaceholderStyle, Hidden, Background)
class TextInput extends Component {
  static styleRefs = {
    background: 'input'
  };

  static propTypes = {
    header: PropTypes.string
  };

  getPlaceholderStyle() {
    return this.state.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  get value() {
    return this.refs.input.value;
  }

  render() {
    const { header, style, ...props } = this.props;
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

    if (header) {
      return (
        <div {...this.props}>
          <Text style={{ marginBottom: '5px' }}>
            {header}
          </Text>
          {input}
        </div>
      );
    }
    return input;
  }
}

export default TextInput;
