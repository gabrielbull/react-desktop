import React, { Component, PropTypes } from 'react';
import Text from '../../text/text.windows/text';
import DesktopComponent, { PlaceholderStyle } from '../../desktop-component';

var styles = {
  textBox: {
    userSelect: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(148, 148, 148, 1)',
    padding: '2px 10px 3px 10px',
    lineHeight: '23px',
    fontFamily: '"Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    fontWeight: '100',
    color: '#000000',
    backgroundColor: 'rgba(255, 255, 255, .35)',

    ':hover': {
      borderColor: 'rgba(100, 100, 100, 1)',
      backgroundColor: 'rgba(255, 255, 255, .5)'
    },

    ':focus': {
      outline: 'none',
      borderColor: 'rgba(0, 120, 215, 1)',
      backgroundColor: 'rgba(255, 255, 255, 1)'
    }
  },

  textBoxDarkTheme: {
    borderColor: 'rgba(255, 255, 255, .41)',
    backgroundColor: 'rgba(0, 0, 0, .4)',
    color: '#ffffff',

    ':hover': {
      borderColor: 'rgba(255, 255, 255, .94)',
      backgroundColor: 'rgba(0, 0, 0, .6)'
    },

    ':focus': {
      outline: 'none',
      borderColor: 'rgba(0, 120, 215, 1)',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#000000'
    }
  },

  ':placeholder': {
    color: '#636363'
  },

  ':placeholderDarkTheme': {
    color: 'rgba(255, 255, 255, .64)',

    ':focus': {
      color: 'rgba(0, 0, 0, .41)'
    }
  }
};

@DesktopComponent(PlaceholderStyle)
class TextBoxWindows extends Component {
  static propTypes = {
    header: PropTypes.string
  };

  getPlaceholderStyle() {
    return this.state.theme === 'dark' ? styles[':placeholderDarkTheme'] : styles[':placeholder'];
  }

  render() {
    const { header, style, ...props } = this.props;
    let componentStyle = {
      ...styles.textBox,
      ...style,
      visibility: this.state.visible ? 'visible' : 'hidden',
      display: this.state.display ? 'block' : 'none'
    };

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
        <div>
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

export default TextBoxWindows;
